import{_ as n,o as s,c as a,a as t}from"./app-9ffccc45.js";const e={},p=t(`<h1 id="types-and-variables" tabindex="-1"><a class="header-anchor" href="#types-and-variables" aria-hidden="true">#</a> Types and variables</h1><h2 id="basic-types" tabindex="-1"><a class="header-anchor" href="#basic-types" aria-hidden="true">#</a> Basic types</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">bool</span> aBoolean <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">| Immutable sequence of bytes</span>
<span class="token keyword">str</span> aString <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;hello world&quot;</span></span><span class="token punctuation">;</span>
<span class="token keyword">str</span> multiline <span class="token operator">=</span> <span class="token string-literal"><span class="token string">\`
    i&#39;m on several
    lines
    yes
\`</span></span><span class="token punctuation">;</span>
<span class="token keyword">int</span> aNumber <span class="token operator">=</span> <span class="token number">23</span><span class="token punctuation">;</span> <span class="token comment">| i32</span>
aNumber <span class="token operator">=</span> <span class="token number">0b110</span><span class="token punctuation">;</span>
aNumber <span class="token operator">=</span> <span class="token number">0xA12F</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> aFloat <span class="token operator">=</span> <span class="token number">23.123</span><span class="token punctuation">;</span> <span class="token comment">| f64</span>
<span class="token comment">| A PCRE regex</span>
<span class="token keyword">pat</span> aPattern <span class="token operator">=</span> _hello <span class="token punctuation">[</span>a<span class="token operator">-</span>z<span class="token punctuation">]</span><span class="token operator">+</span>_<span class="token punctuation">;</span>
<span class="token comment">| Userdata are pointers to foreign data wrapped inside a buzz obj</span>
<span class="token keyword">ud</span> userdata <span class="token operator">=</span> <span class="token function">GetSomeForeignData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">| A constant</span>
<span class="token keyword">const</span> <span class="token keyword">float</span> pi <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="data-structures" tabindex="-1"><a class="header-anchor" href="#data-structures" aria-hidden="true">#</a> Data structures</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token punctuation">[</span><span class="token keyword">int</span><span class="token punctuation">]</span> aListOfNumbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,</span> <span class="token number">2,</span> <span class="token number">3]</span><span class="token punctuation">;</span>
<span class="token comment">| Keys and values can be of any type</span>
<span class="token punctuation">{</span><span class="token keyword">str</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">}</span> aMap <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-literal"><span class="token string">&quot;one&quot;</span></span><span class="token punctuation">:</span> <span class="token number">1,</span>
    <span class="token string-literal"><span class="token string">&quot;two&quot;</span></span><span class="token punctuation">:</span> <span class="token number">2,</span>
    <span class="token string-literal"><span class="token string">&quot;three&quot;</span></span><span class="token punctuation">:</span> <span class="token number">3,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">| A range results in a list of ints</span>
<span class="token punctuation">[</span><span class="token keyword">int</span><span class="token punctuation">]</span> range <span class="token operator">=</span> <span class="token number">0..10</span><span class="token punctuation">;</span>
</code></pre></div>`,5),o=[p];function c(l,r){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","types-and-variables.html.vue"]]);export{k as default};
