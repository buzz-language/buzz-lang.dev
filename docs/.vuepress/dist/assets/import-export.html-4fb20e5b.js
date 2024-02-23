import{_ as t,r as e,o as p,c,b as s,d as n,e as l,w as i,a}from"./app-c4365ff5.js";const u={},r=a(`<h1 id="import-export" tabindex="-1"><a class="header-anchor" href="#import-export" aria-hidden="true">#</a> Import/Export</h1><h2 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> Import</h2><p>To import another script, use the <code>import</code> statement:</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&quot;std&quot;</span></span><span class="token punctuation">;</span>

<span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;hello&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">| print is defined in \`std\`</span>
</code></pre></div><p>When importing, buzz will search the script in common places. With <code>?</code> being the library name:</p><ul><li><code>./?.buzz</code></li><li><code>./?/main.buzz</code></li><li><code>./?/src/main.buzz</code></li><li><code>./?/src/?.buzz</code></li><li><code>/usr/share/buzz/?.buzz</code></li><li><code>/usr/share/buzz/?/main.buzz</code></li><li><code>/usr/share/buzz/?/src/main.buzz</code></li><li><code>/usr/share/buzz/?/src/?.buzz</code></li><li><code>/usr/local/share/buzz/?.buzz</code></li><li><code>/usr/local/share/buzz/?/main.buzz</code></li><li><code>/usr/local/share/buzz/?/src/main.buzz</code></li><li><code>/usr/local/share/buzz/?/src/?.buzz</code></li><li><code>$BUZZ_PATH/?.buzz</code></li><li><code>$BUZZ_PATH/?/main.buzz</code></li><li><code>$BUZZ_PATH/?/src/?.buzz</code></li><li><code>$BUZZ_PATH/?/src/main.buzz</code></li></ul>`,6),d=s("code",null,"extern",-1),k=a(`<ul><li><code>./?.so</code></li><li><code>./?/src/lib?.so</code></li><li><code>/usr/share/so/lib?.so</code></li><li><code>/usr/share/so/lib?/src/?.so</code></li><li><code>/usr/local/share/so/lib?.so</code></li><li><code>/usr/local/share/so/lib?/src/?.so</code></li><li><code>$BUZZ_PATH/lib?.so</code></li><li><code>$BUZZ_PATH/?/src/lib?.so</code></li></ul><h3 id="alias" tabindex="-1"><a class="header-anchor" href="#alias" aria-hidden="true">#</a> Alias</h3><p>You can scope the imported symbol behind a prefix to avoid name collision or for readability.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&quot;std&quot;</span></span> <span class="token keyword">as</span> std<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&quot;io&quot;</span></span> <span class="token keyword">as</span> io<span class="token punctuation">;</span>

<span class="token comment">| Defining our own print function</span>
<span class="token keyword">fun</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">str</span> message<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    io<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="exporting" tabindex="-1"><a class="header-anchor" href="#exporting" aria-hidden="true">#</a> Exporting</h2><p>To export symbols, use the <code>export</code> statement:</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token comment">| hello.buzz</span>
<span class="token keyword">fun</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello world!&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">| Make it visible when imported</span>
<span class="token keyword">export</span> sayHello<span class="token punctuation">;</span>
</code></pre></div><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token comment">| main.buzz</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&quot;hello&quot;</span></span><span class="token punctuation">;</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">str</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You can also put <code>export</code> right before the declaration:</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">export</span> <span class="token keyword">fun</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello world!&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="alias-1" tabindex="-1"><a class="header-anchor" href="#alias-1" aria-hidden="true">#</a> Alias</h3><p>You can export a declaration with another name.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token comment">| hello.buzz</span>
<span class="token keyword">fun</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello world!&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> sayHello <span class="token keyword">as</span> hello<span class="token punctuation">;</span>
</code></pre></div><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token comment">| main.buzz</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&quot;hello&quot;</span></span><span class="token punctuation">;</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">str</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,14);function z(h,b){const o=e("RouterLink");return p(),c("div",null,[r,s("p",null,[n("When defining "),l(o,{to:"/guide/calling-native-code.html"},{default:i(()=>[d,n(" functions")]),_:1}),n(", buzz will search the symbol in a dynamic library. It'll be searched in the same common places:")]),k])}const g=t(u,[["render",z],["__file","import-export.html.vue"]]);export{g as default};