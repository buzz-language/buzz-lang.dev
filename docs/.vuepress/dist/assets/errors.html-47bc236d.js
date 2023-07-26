import{_ as n,o as s,c as a,a as t}from"./app-a5186c77.js";const p={},o=t(`<h1 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h1><p>Functions must specify which error they can raise with <code>!&gt; type1, type2, ...</code>. Error can&#39;t be raised in the global scope. <code>test</code> functions ignore errors.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">enum</span><span class="token punctuation">(</span><span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token class-name">MyErrors</span> <span class="token punctuation">{</span>
    failed <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Something failed&quot;</span></span><span class="token punctuation">,</span>
    bad <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Something bad&quot;</span></span><span class="token punctuation">,</span>
    ohno <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Oh no!&quot;</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span><span class="token punctuation">(</span><span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token class-name">OtherErrors</span> <span class="token punctuation">{</span>
    failed <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Something failed&quot;</span></span><span class="token punctuation">,</span>
    bad <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Something bad&quot;</span></span><span class="token punctuation">,</span>
    ohno <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Oh no!&quot;</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">willFail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">int</span> <span class="token operator">!&gt;</span> <span class="token class-name">MyErrors</span><span class="token punctuation">,</span> <span class="token class-name">OtherErrors</span><span class="token punctuation">,</span> <span class="token keyword">str</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> random <span class="token operator">=</span> <span class="token function">rand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>random <span class="token operator">==</span> <span class="token number">1)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token class-name">MyErrors</span><span class="token punctuation">.</span>failed<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>random <span class="token operator">==</span> <span class="token number">0)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token class-name">OtherErrors</span><span class="token punctuation">.</span>failed<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">throw</span> <span class="token string-literal"><span class="token string">&quot;something else&quot;</span></span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0;</span>
<span class="token punctuation">}</span>

<span class="token comment">| Use default value in case of any error</span>
<span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">willFail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">catch</span> <span class="token number">0;</span>

<span class="token comment">| Try catch works as you would expect</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">willFail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token keyword">str</span> error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Caught error </span><span class="token interpolation">{error}</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Catches everything&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">| Throwing an object instance with a \`message\` field will print the message</span>
<span class="token keyword">throw</span> <span class="token punctuation">.</span><span class="token punctuation">{</span> message <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Something&#39;s wrong&quot;</span></span> <span class="token punctuation">}</span> <span class="token comment">| -&gt; Error: Something&#39;s wrong</span>
<span class="token keyword">throw</span> <span class="token class-name">SomeObject</span><span class="token punctuation">{</span> number <span class="token operator">=</span> <span class="token number">12</span> <span class="token punctuation">}</span>          <span class="token comment">| -&gt; Error: object instance 0x1feb12 \`SomeObject\`</span>
</code></pre></div>`,3),e=[o];function c(l,r){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","errors.html.vue"]]);export{k as default};
