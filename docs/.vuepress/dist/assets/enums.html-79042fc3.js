import{_ as a,o as n,c as s,a as e}from"./app-30a05bfa.js";const t={},o=e(`<h1 id="enums" tabindex="-1"><a class="header-anchor" href="#enums" aria-hidden="true">#</a> Enums</h1><p>Enums are a lists of constant values, either strings or numbers. By default an enum is of value type <code>int</code> and each case will have a incremented value starting at <code>0</code>. To get the value associated with a case, use the <code>value</code> property.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">enum</span> <span class="token class-name">Natural</span> <span class="token punctuation">{</span>
    zero<span class="token punctuation">,</span>
    one<span class="token punctuation">,</span>
    two<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token class-name">Natural</span><span class="token punctuation">.</span>zero<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token number">0;</span>
</code></pre></div><p>If the enum&#39;s value type is not <code>int</code>, it must be specified between parentheses after the <code>enum</code> keyword.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">enum</span><span class="token operator">&lt;</span><span class="token keyword">str</span><span class="token operator">&gt;</span> <span class="token class-name">Country</span> <span class="token punctuation">{</span>
    usa <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;United States of America&quot;</span></span><span class="token punctuation">,</span>
    uk <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;United Kingdoms&quot;</span></span><span class="token punctuation">,</span>
    fr <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;France&quot;</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The value type must be one of: <code>str</code>, <code>int</code>, <code>double</code>, <code>pat</code>, <code>rg</code>, <code>ud</code>, <code>void</code>.</p><p>To get the enum case from its value, you can call the enum like a function with the value as argument.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">var</span> country <span class="token operator">=</span> <span class="token function">Country</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;France&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
country <span class="token operator">==</span> <span class="token class-name">Country</span><span class="token punctuation">.</span>fr<span class="token punctuation">;</span>
</code></pre></div><p>When the value type is <code>str</code>, you can omit case values which will be the same as the case name.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">enum</span><span class="token operator">&lt;</span><span class="token keyword">str</span><span class="token operator">&gt;</span> <span class="token class-name">Locale</span> <span class="token punctuation">{</span>
    fr<span class="token punctuation">,</span>
    it<span class="token punctuation">,</span>
    en<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token class-name">Locale</span><span class="token punctuation">.</span>en<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token string-literal"><span class="token string">&quot;en&quot;</span></span><span class="token punctuation">;</span>
</code></pre></div><p>If one case value is specified <strong>all</strong> cases must also have a value.</p>`,11),p=[o];function c(u,l){return n(),s("div",null,p)}const i=a(t,[["render",c],["__file","enums.html.vue"]]);export{i as default};
