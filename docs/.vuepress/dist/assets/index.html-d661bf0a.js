import{_ as n,o as s,c as a,a as p}from"./app-563139a6.js";const t={},o=p(`<div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&quot;std&quot;</span></span><span class="token punctuation">;</span>

<span class="token keyword">fun</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token operator">*&gt;</span> <span class="token keyword">int</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> n1 <span class="token operator">=</span> <span class="token number">0;</span>
    <span class="token keyword">var</span> n2 <span class="token operator">=</span> <span class="token number">1;</span>
    <span class="token keyword">int</span><span class="token operator">?</span> next <span class="token operator">=</span> <span class="token null constant">null</span><span class="token punctuation">;</span>

    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token keyword">var</span> _ <span class="token keyword">in</span> <span class="token number">0.</span><span class="token punctuation">.</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _ <span class="token operator">=</span> <span class="token keyword">yield</span> n1<span class="token punctuation">;</span>
        next <span class="token operator">=</span> n1 <span class="token operator">+</span> n2<span class="token punctuation">;</span>
        n1 <span class="token operator">=</span> n2<span class="token punctuation">;</span>
        n2 <span class="token operator">=</span> next<span class="token operator">!</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">str</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token class-name">N</span> <span class="token operator">=</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0)</span>
            std<span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>args<span class="token punctuation">[</span><span class="token number">0]</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token number">10</span>
        <span class="token keyword">else</span>
            <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token keyword">var</span> n <span class="token keyword">in</span> <span class="token operator">&amp;</span><span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token class-name">N</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation">{n}</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1),e=[o];function c(l,k){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","index.html.vue"]]);export{r as default};
