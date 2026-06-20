import{_ as n,o as a,c as s,a as t}from"./app-d76978d4.js";const e={},p=t(`<h1 id="enums" tabindex="-1"><a class="header-anchor" href="#enums" aria-hidden="true">#</a> Enums</h1><p>Enums are lists of constant values, either strings or numbers. By default an enum is of value type <code>int</code> and each case will have an incremented value starting at <code>0</code>. To get the value associated with a case, use the <code>value</code> property.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">enum</span> <span class="token class-name">Natural</span> <span class="token punctuation">{</span>
    zero<span class="token punctuation">,</span>
    one<span class="token punctuation">,</span>
    two<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token class-name">Natural</span><span class="token punctuation">.</span>zero<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre></div><p>If the enum&#39;s value type is not <code>int</code>, it must be specified between angle brackets after the <code>enum</code> keyword.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">enum</span><span class="token operator">&lt;</span><span class="token keyword">str</span><span class="token operator">&gt;</span> <span class="token class-name">Country</span> <span class="token punctuation">{</span>
    usa <span class="token operator">=</span> <span class="token string-literal"><span class="token string-punctuation punctuation">&quot;</span><span class="token string">United States of America</span><span class="token string-punctuation punctuation">&quot;</span></span><span class="token punctuation">,</span>
    uk <span class="token operator">=</span> <span class="token string-literal"><span class="token string-punctuation punctuation">&quot;</span><span class="token string">United Kingdom</span><span class="token string-punctuation punctuation">&quot;</span></span><span class="token punctuation">,</span>
    fr <span class="token operator">=</span> <span class="token string-literal"><span class="token string-punctuation punctuation">&quot;</span><span class="token string">France</span><span class="token string-punctuation punctuation">&quot;</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The value type must be one of: <code>str</code>, <code>int</code>, <code>double</code>, <code>pat</code>, <code>rg</code>, <code>ud</code>, <code>void</code>.</p><p>To get the enum case from its value, you can call the enum like a function with the value as an argument.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">final</span> <span class="token variable">country</span> <span class="token operator">=</span> <span class="token class-name">Country</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string-punctuation punctuation">&quot;</span><span class="token string">France</span><span class="token string-punctuation punctuation">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
country <span class="token operator">==</span> <span class="token punctuation">.</span>fr<span class="token punctuation">;</span>
</code></pre></div><p>When the value type is <code>str</code>, you can omit case values which will be the same as the case name.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">enum</span><span class="token operator">&lt;</span><span class="token keyword">str</span><span class="token operator">&gt;</span> <span class="token class-name">Locale</span> <span class="token punctuation">{</span>
    fr<span class="token punctuation">,</span>
    it<span class="token punctuation">,</span>
    en<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token class-name">Locale</span><span class="token punctuation">.</span>en<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token string-literal"><span class="token string-punctuation punctuation">&quot;</span><span class="token string">en</span><span class="token string-punctuation punctuation">&quot;</span></span><span class="token punctuation">;</span>
</code></pre></div><p>If one case value is specified <strong>all</strong> cases must also have a value.</p><p>When it can be inferred, the enum name can be omitted:</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">Lang</span> <span class="token punctuation">{</span>
    locale<span class="token punctuation">:</span> <span class="token class-name">Locale</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">final</span> <span class="token variable">lang</span> <span class="token operator">=</span> <span class="token class-name">Lang</span><span class="token punctuation">{</span>
    locale <span class="token operator">=</span> <span class="token punctuation">.</span>fr<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,13),o=[p];function c(u,l){return a(),s("div",null,o)}const r=n(e,[["render",c],["__file","enums.html.vue"]]);export{r as default};
