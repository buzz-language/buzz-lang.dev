
<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'

const ansi = {
    0: 'ansi-reset',
    1: 'ansi-bright',
    2: 'ansi-dim',
    4: 'ansi-underscore',
    5: 'ansi-blink',
    7: 'ansi-reverse',
    8: 'ansi-hidden',

    30: 'ansi-black',
    31: 'ansi-red',
    32: 'ansi-green',
    33: 'ansi-yellow',
    34: 'ansi-blue',
    35: 'ansi-magenta',
    36: 'ansi-cyan',
    37: 'ansi-white',

    40: 'ansi-onblack',
    41: 'ansi-onred',
    42: 'ansi-ongreen',
    43: 'ansi-onyellow',
    44: 'ansi-onblue',
    45: 'ansi-onmagenta',
    46: 'ansi-oncyan',
    47: 'ansi-onwhite',

    90: 'ansi-bright ansi-black',
    91: 'ansi-bright ansi-red',
    92: 'ansi-bright ansi-green',
    93: 'ansi-bright ansi-yellow',
    94: 'ansi-bright ansi-blue',
    95: 'ansi-bright ansi-magenta',
    96: 'ansi-bright ansi-cyan',
    97: 'ansi-bright ansi-white',
}

// Delcared here because js functions exposed to buzz do not have access to vue's this
type StdoutElement = {
    type: string,
    content: string
}
let stdout: Ref<Array<StdoutElement>> = ref([]);

export default defineComponent({
    data: () => {
        return {
            wasmImports: null,
            ctx: null,
            stdin: null,
            replHistory: [],
            historyIndex: 0,
        };
    },

    computed: {
        stdout: function() {
            return stdout;
        }
    },

    methods: {
        run(e) {
            if (!e.shiftKey && this.stdin?.length > 0) {
                const stdin = document.querySelector('#stdin') as HTMLInputElement

                if (this.replHistory.length == 0 || this.replHistory[this.replHistory.length - 1] !== stdin.value) {
                    this.replHistory.push(stdin.value)
                    // limit history depth
                    this.replHistory = this.replHistory.slice(-100)
                    this.historyIndex = this.replHistory.length;

                    localStorage.setItem('replHistory', JSON.stringify(this.replHistory))
                }

                stdout.value.push({
                    type: 'input',
                    content: `\n> ${stdin.value}\n`
                })

                this.wasmImports.runLine(this.ctx)

                // Scroll to end (wait a bit for the content to be rerendered)
                setTimeout(function() {
                    const stdoutElement = document.querySelector('#stdout')
                    stdoutElement.scrollTop = stdoutElement.scrollHeight
                }, 100)

                this.stdin = null
            }
        },

        historyUp() {
            if (this.replHistory.length == 0) {
                return;
            }

            this.historyIndex = Math.max(0, this.historyIndex - 1);

            this.stdin = this.replHistory[this.historyIndex];
            this.setCursorAtEnd()
        },

        historyDown() {
            if (this.replHistory.length == 0) {
                return;
            }

            this.historyIndex = Math.min(this.historyIndex + 1, this.replHistory.length);

            this.stdin = this.replHistory[this.historyIndex];
            this.setCursorAtEnd()
        },

        setCursorAtEnd() {
            const stdinElement = document.querySelector('#stdin') as HTMLInputElement
            setTimeout(
                function() {
                    stdinElement.selectionStart = stdinElement.selectionEnd = stdinElement.value.length;
                },
                0
            );
        },

        clear() {
            stdout.value = []
        },

        ansiToHtml(input) {
            let html = []
            let previous = null
            let current = null
            for (const match of input.matchAll(/\033\[([0-9]+)m/g)) {
                // First element
                if (previous === null && match.index > 0) {
                    previous = 0

                    html.push({
                        content: input.slice(0, match.index)
                    })
                } else if (match.index > 0) {
                    current.content = input.slice(
                        previous,
                        match.index
                    )

                    html.push(current)
                }

                previous = match.index + match[0].length
                current = {
                    class: ansi[match[1]]
                };
            }

            if (previous !== null && previous < input.length) {
                current.textContent = input.slice(previous)
            } else if (previous === null) {
                // No match
                html.push({
                    content: input
                })
            }

            return html
        }
    },

    async mounted() {
        const decoder = new TextDecoder()
        const encoder = new TextEncoder()

        // Unit is pages: 64kb
        var memory = new WebAssembly.Memory({
            initial: 100,
            maximum: 1000
        })

        type WasmImports = Readonly<{
            memory: WebAssembly.Memory
            initRepl(): number
            runLine(ctx: number): void
        }>

        function writeToStderr(stringPtr: number, stringLength: number): void {
            let string = decoder.decode(
                new Uint8Array(memory.buffer, stringPtr, stringLength),
                {
                    stream: true
                }
            )

            const lastType = stdout.value.length > 0 ? stdout.value[stdout.value.length - 1].type : null;
            if (lastType === null || lastType === 'input') {
                stdout.value.push({
                    type: 'output',
                    content: string
                });
            } else {
                stdout.value[stdout.value.length - 1].content += string;
            }
        }

        function readFromStdin(bufferPtr: number, bufferLength: number): number {
            // This is run by wasm, vue's this is not there
            const stdin = document.querySelector('#stdin') as HTMLInputElement
            let value = stdin.value;

            let buffer = new Uint8Array(memory.buffer, bufferPtr, bufferLength)
            // Write input value into provided memory (truncate if too much)
            buffer.set(encoder.encode(value).slice(0, bufferLength))

            stdin.value = null

            return Math.min(bufferLength, value.length)
        }

        this.wasmImports = (
            await WebAssembly.instantiateStreaming(fetch('buzz.wasm'), {
                env: {
                    memory: memory,
                    writeToStderr: writeToStderr,
                    readFromStdin: readFromStdin
                }
            } as const)
        ).instance.exports as WasmImports

        this.ctx = this.wasmImports.initRepl()

        const stdin = document.querySelector('#stdin') as HTMLInputElement
        stdin.focus()

        this.replHistory = JSON.parse(localStorage.getItem('replHistory') ?? '[]').slice(-100)
        this.historyIndex = this.replHistory.length
    }
})
</script>

<style>
    .stdin-container {
        padding: 0.3rem 1rem;
        background-color: #4444;
        display: flex;
    }

    .stdin-container #prompt {
        color: white;
        font-family: var(--font-family-code);
        font-weight: bold;
    }

    .stdin-container > * {
        outline: none;
        border: none;
        white-space: pre-wrap;
        font-family: var(--font-family-code);
        color: white;
        background: transparent;
        min-height: 14px; /* minimum one line */
        padding: 10px;
        margin: 0;
    }

    .theme-default-content pre#stdout {
        height: 400px;
        overflow-y: scroll !important;
        line-height: 1.1em;
    }

    #stdin {
        flex: 1;
        resize: none;
    }

    #stdout .ansi-reset {
        color: white;
        background-color: none;
    }
    #stdout .ansi-bright {
        font-weight: bold;
    }
    #stdout .ansi-dim {
        opacity: 0.8;
    }
    #stdout .ansi-underscore {
        text-decoration: underline;
    }
    #stdout .ansi-blink {
        text-decoration: blink;
    }
    #stdout .ansi-reverse {
        filter: invert(1);
    }
    #stdout .ansi-hidden {
        display: none;
    }

    #stdout .ansi-onblack {
        background-color: #888 important!;
    }
    #stdout .ansi-onred {
        background-color: #D04949 important!;
    }
    #stdout .ansi-ongreen {
        background-color: #7ec699 important!;
    }
    #stdout .ansi-onyellow {
        background-color: #f08d49 important!;
    }
    #stdout .ansi-onblue {
        background-color: #5559F8 important!;
    }
    #stdout .ansi-onmagenta {
        background-color: #cc99cd important!;
    }
    #stdout .ansi-oncyan {
        background-color: #55B1F8 important!;
    }
    #stdout .ansi-onwhite {
        background-color: white important!;
    }

    #stdout .ansi-black {
        color: #888;
    }
    #stdout .ansi-red {
        color: #D04949;
    }
    #stdout .ansi-green {
        color: #7ec699;
    }
    #stdout .ansi-yellow {
        color: #f08d49;
    }
    #stdout .ansi-blue {
        color: #5559F8;
    }
    #stdout .ansi-magenta {
        color: #cc99cd;
    }
    #stdout .ansi-cyan {
        color: #55B1F8;
    }
    #stdout .ansi-white {
        color: white;
    }
</style>

<div class="language-buzz">
    <pre id="stdout">
        <template v-for="element in stdout.value"><template v-for="formattedElement in ansiToHtml(element.content)"><code v-if="formattedElement.content.length > 0" :class="formattedElement.class ?? ''">{{formattedElement.content}}</code></template></template>
    </pre>
    <div class="stdin-container">
        <span id="prompt">»</span>
        <input
            @keydown.enter="run"
            @keydown.up="historyUp"
            @keydown.down="historyDown"
            @keydown.ctrl.l="clear"
            id="stdin"
            v-model="stdin"
            rows="1"
            autocomplete="off"
            placeholder="Type buzz code here..."/>
    </div>
</div>

_Please [report](https://github.com/buzz-language/buzz/issues) any bug or unexpected behaviour_