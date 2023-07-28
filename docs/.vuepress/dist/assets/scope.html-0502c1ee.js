import{_ as n,o as a,c as s,a as e}from"./app-14400920.js";const t={},o=e(`<h1 id="scope" tabindex="-1"><a class="header-anchor" href="#scope" aria-hidden="true">#</a> Scope</h1><h2 id="global-scope" tabindex="-1"><a class="header-anchor" href="#global-scope" aria-hidden="true">#</a> Global scope</h2><p>The global scope is a declarative space where the declarations&#39; order is not important. This is the only scope in which you can declare enums, objects and protocols.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
    <span class="token comment">| Here \`A\` is referred to before its declaration</span>
    <span class="token class-name">A</span> a<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">object</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">str</span> value<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">| Only a constant value is allowed here</span>
<span class="token keyword">str</span> globalValue <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;hello&quot;</span></span><span class="token punctuation">;</span>
</code></pre></div><h2 id="local-scope" tabindex="-1"><a class="header-anchor" href="#local-scope" aria-hidden="true">#</a> Local scope</h2><p>Any variable declared inside a block is local to it. Shadowing a variable from an upper scope is not allowed.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">str</span> bye <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;bye&quot;</span></span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">str</span> hello <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;hello&quot;</span></span><span class="token punctuation">;</span> <span class="token comment">| Local to this block</span>
    <span class="token keyword">int</span> byte <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>       <span class="token comment">| -&gt; Not allowed</span>
<span class="token punctuation">}</span>

<span class="token comment">| hello doesn&#39;t exist anymore</span>
</code></pre></div><h2 id="upvalues" tabindex="-1"><a class="header-anchor" href="#upvalues" aria-hidden="true">#</a> Upvalues</h2><p>If a reference to a variable from a upper scope is made inside a function&#39;s body, the function will carry a reference to it even when the variable goes out of scope. This is <strong>an upvalue</strong>.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">getFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token function">Function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">str</span> upvalue <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;up there&quot;</span></span><span class="token punctuation">;</span>

    <span class="token function">Function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> hello <span class="token operator">=</span> <span class="token keyword">fun</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span>upvalue<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> hello<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">| \`upvalue\` is out of scope but still exists as an upvalue of \`hello\`</span>
<span class="token function">getFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,10),p=[o];function c(l,u){return a(),s("div",null,p)}const r=n(t,[["render",c],["__file","scope.html.vue"]]);export{r as default};
