
<script lang="ts">
import { defineComponent } from 'vue'

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

    methods: {
        run(e) {
            if (!e.shiftKey && this.stdin?.length > 0) {
                const container = document.querySelector('.stdout-container')
                const stdout = document.querySelector('#stdout')
                const stdin = document.querySelector('#stdin')

                if (this.replHistory.length == 0 || this.replHistory[this.replHistory.length - 1] !== stdin.value) {
                    this.replHistory.push(stdin.value)
                    // limit history depth
                    this.replHistory = this.replHistory.slice(-100)
                    this.historyIndex = this.replHistory.length;

                    localStorage.setItem('replHistory', JSON.stringify(this.replHistory))
                }

                stdout.textContent += `\n> ${stdin.value}\n`

                this.wasmImports.runLine(this.ctx)

                // Scroll to end
                container.scrollTop = container.scrollHeight
            }
        },

        historyUp() {
            if (this.replHistory.length == 0) {
                return;
            }

            this.historyIndex = Math.max(0, this.historyIndex - 1);
            console.log(this.historyIndex)

            this.stdin = this.replHistory[this.historyIndex];
            this.setCursorAtEnd()
        },

        historyDown() {
            if (this.replHistory.length == 0) {
                return;
            }

            this.historyIndex = Math.min(this.historyIndex + 1, this.replHistory.length);
            console.log(this.historyIndex)

            this.stdin = this.replHistory[this.historyIndex];
            this.setCursorAtEnd()
        },

        setCursorAtEnd() {
            const stdinElement = document.querySelector('#stdin')
            setTimeout(
                function() {
                    stdinElement.selectionStart = stdinElement.selectionEnd = stdinElement.value.length;
                },
                0
            );
        },

        clear() {
            document.querySelector('#stdout').textContent = '';
        },
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

            const stdout = document.querySelector('#stdout') as HTMLPreElement

            stdout.textContent += string;
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

        document.querySelector('#stdin').focus()

        this.replHistory = JSON.parse(localStorage.getItem('replHistory') ?? '[]').slice(-100)
        this.historyIndex = this.replHistory.length
    }
})
</script>

<style>
    .stdin-container {
        padding: 1.3rem 1.3rem;
        background-color: #4444;
    }

    .stdin-container:before {
        content: "»";
        color: white;
        position: absolute;
        font-family: var(--font-family-code);
        margin-top: -0.1rem;
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

    .theme-default-content pre.stdout-container {
        height: 400px;
        overflow-y: scroll !important;
        line-height: 1.1em;
    }

    #stdin {
        flex: 1;
        padding: 0 0 0 1.5em;
        resize: none;
        width: 100%;
    }
</style>

<div class="language-buzz">
    <pre class="stdout-container">
        <code id="stdout"></code>
    </pre>
    <div class="stdin-container">
        <input
            @keydown.enter="run"
            @keydown.up="historyUp"
            @keydown.down="historyDown"
            @keydown.ctrl.l="clear"
            id="stdin"
            v-model="stdin"
            rows="1"
            placeholder="Type buzz code here..."/>
    </div>
</div>
