import{_ as n,o as s,c as a,a as t}from"./app-66a723fb.js";const o={},p=t(`<h1 id="objects" tabindex="-1"><a class="header-anchor" href="#objects" aria-hidden="true">#</a> Objects</h1><p>An <code>object</code> is like a class, except it can&#39;t be inherited from and can&#39;t inherit from anything:</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> population <span class="token operator">=</span> <span class="token number">0;</span>

    <span class="token keyword">str</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Joe&quot;</span></span><span class="token punctuation">,</span> <span class="token comment">| Fields can have default values</span>
    <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">35</span><span class="token punctuation">,</span>

    <span class="token comment">| Method</span>
    <span class="token keyword">fun</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello </span><span class="token interpolation">{this.name}</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">| Object don&#39;t have constructor but you can implement one with a static method</span>
    <span class="token keyword">static</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">str</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span><span class="token punctuation">.</span>population <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>population <span class="token operator">+</span> <span class="token number">1;</span>

        <span class="token keyword">return</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
            name <span class="token operator">=</span> name<span class="token punctuation">,</span>
            age <span class="token operator">=</span> age<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="anonymous-objects" tabindex="-1"><a class="header-anchor" href="#anonymous-objects" aria-hidden="true">#</a> Anonymous objects</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token comment">| Anonymous objects don&#39;t have methods, static fields or default values</span>
<span class="token keyword">fun</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">obj</span><span class="token punctuation">{</span> <span class="token keyword">str</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age <span class="token punctuation">}</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">.</span><span class="token punctuation">{</span>
        name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Joe&quot;</span></span><span class="token punctuation">,</span>
        age <span class="token operator">=</span> <span class="token number">36</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">| ...</span>

<span class="token keyword">obj</span><span class="token punctuation">{</span> <span class="token keyword">str</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age <span class="token punctuation">}</span> info <span class="token operator">=</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,5),e=[p];function c(l,u){return s(),a("div",null,e)}const i=n(o,[["render",c],["__file","objects.html.vue"]]);export{i as default};
