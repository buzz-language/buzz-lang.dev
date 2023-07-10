import{_ as n,o as s,c as a,a as t}from"./app-0d40671f.js";const p={},o=t(`<h1 id="optionals" tabindex="-1"><a class="header-anchor" href="#optionals" aria-hidden="true">#</a> Optionals</h1><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">str</span><span class="token operator">?</span> aStringOrNull <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;hello&quot;</span></span><span class="token punctuation">;</span>

<span class="token comment">| Null coalescing operator is \`??\`</span>
<span class="token keyword">str</span> unwrapped <span class="token operator">=</span> aStringOrNull <span class="token operator">??</span> <span class="token string-literal"><span class="token string">&quot;default value&quot;</span></span>

<span class="token comment">| Force unwrapping with \`!\`</span>
<span class="token keyword">str</span> unwrapped <span class="token operator">=</span> aStringOrNull<span class="token operator">!</span><span class="token punctuation">;</span>

<span class="token comment">| Graceful unwrapping</span>
<span class="token punctuation">[</span><span class="token keyword">int</span><span class="token punctuation">]</span><span class="token operator">?</span> optList <span class="token operator">=</span> <span class="token null constant">null</span><span class="token punctuation">;</span>

<span class="token function">print</span><span class="token punctuation">(</span>optList<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">| -&gt; null</span>

<span class="token comment">| If unwrap</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>aStringOrNull <span class="token operator">-&gt;</span> aString<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation">{aString}</span><span class="token string"> is not null&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;aString was null&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","optionals.html.vue"]]);export{i as default};
