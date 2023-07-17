import{_ as n,o as s,c as a,a as t}from"./app-abc9d1dc.js";const p={},e=t(`<h1 id="enums" tabindex="-1"><a class="header-anchor" href="#enums" aria-hidden="true">#</a> Enums</h1><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token comment">| Enums can have number or string values</span>
<span class="token keyword">enum</span> <span class="token class-name">Natural</span> <span class="token punctuation">{</span>
    zero<span class="token punctuation">,</span>
    one<span class="token punctuation">,</span>
    two<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token class-name">Natural</span><span class="token punctuation">.</span>zero<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token number">0;</span>

<span class="token comment">| Values must either be implicit or be all defined</span>
<span class="token keyword">enum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token class-name">NumEnum</span> <span class="token punctuation">{</span>
    three <span class="token operator">=</span> <span class="token number">3,</span>
    four <span class="token operator">=</span> <span class="token number">4,</span>
    five <span class="token operator">=</span> <span class="token number">5,</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span><span class="token punctuation">(</span><span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token class-name">Country</span> <span class="token punctuation">{</span>
    usa <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;United States of America&quot;</span></span><span class="token punctuation">,</span>
    uk <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;United Kingdoms&quot;</span></span><span class="token punctuation">,</span>
    fr <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;France&quot;</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">| To get the value associated with a enum case</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">Country</span><span class="token punctuation">.</span>usa<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">| -&gt; &quot;United States of America&quot;</span>

<span class="token keyword">enum</span><span class="token punctuation">(</span><span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token class-name">Locale</span> <span class="token punctuation">{</span>
    fr<span class="token punctuation">,</span>
    en<span class="token punctuation">,</span>
    it<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token class-name">Locale</span><span class="token punctuation">.</span>fr<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token string-literal"><span class="token string">&quot;fr&quot;</span></span><span class="token punctuation">;</span>

<span class="token comment">| Create enum instance from its value</span>
<span class="token class-name">Locale</span><span class="token operator">?</span> locale <span class="token operator">=</span> <span class="token function">Locale</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;fr&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
locale <span class="token operator">==</span> <span class="token class-name">Locale</span><span class="token punctuation">.</span>fr
</code></pre></div>`,2),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","enums.html.vue"]]);export{r as default};
