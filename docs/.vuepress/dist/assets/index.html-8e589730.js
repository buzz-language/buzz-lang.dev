import{_ as n,o as s,c as a,a as t}from"./app-703b205c.js";const p={},o=t(`<div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&quot;std&quot;</span></span><span class="token punctuation">;</span>

<span class="token comment">| 👨‍🚀 buzz is a simple unambiguous scripting language</span>
<span class="token keyword">object</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">str</span> name<span class="token punctuation">,</span>
    <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">,</span>

    <span class="token keyword">fun</span> <span class="token function">growUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">int</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token number">1;</span>

        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">str</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token class-name">Person</span> me <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
        name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Giann&quot;</span></span><span class="token punctuation">,</span>
        age <span class="token operator">=</span> <span class="token number">36</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello I&#39;m </span><span class="token interpolation">{me.name}</span><span class="token string"> and I&#39;m </span><span class="token interpolation">{me.age}</span><span class="token string">.&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","index.html.vue"]]);export{i as default};
