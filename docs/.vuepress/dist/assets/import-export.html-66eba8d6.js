import{_ as n,o as s,c as a,a as t}from"./app-7c0adfb4.js";const o={},p=t(`<h1 id="import-export" tabindex="-1"><a class="header-anchor" href="#import-export" aria-hidden="true">#</a> Import/Export</h1><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token comment">| hello.buzz</span>

<span class="token comment">| Import std lib</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&quot;std&quot;</span></span><span class="token punctuation">;</span>

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
</code></pre></div>`,3),e=[p];function c(l,u){return s(),a("div",null,e)}const r=n(o,[["render",c],["__file","import-export.html.vue"]]);export{r as default};
