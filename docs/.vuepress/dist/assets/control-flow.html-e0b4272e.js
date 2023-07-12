import{_ as n,o as s,c as a,a as p}from"./app-66a723fb.js";const t={},o=p(`<h1 id="control-flow" tabindex="-1"><a class="header-anchor" href="#control-flow" aria-hidden="true">#</a> Control flow</h1><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token comment">| The usual</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>someCondition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">| ...</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>anotherCondition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">| ...</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">| ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">do</span> <span class="token punctuation">{</span>
    j <span class="token operator">=</span> j <span class="token operator">-</span> <span class="token number">1;</span>
<span class="token punctuation">}</span> <span class="token keyword">until</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">0)</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1)</span> <span class="token punctuation">{</span>
    <span class="token comment">| ...</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">| inline if</span>
<span class="token keyword">int</span> value <span class="token operator">=</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>something <span class="token operator">&gt;</span> <span class="token number">0)</span> <span class="token number">12</span> <span class="token keyword">else</span> <span class="token number">13</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> <code>foreach</code></h2><p><code>foreach</code> can iterate over most data structures:</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name">SomeEnum</span> case <span class="token keyword">in</span> <span class="token class-name">SomeEnum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">| ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">str</span> value <span class="token keyword">in</span> listOfStrings<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">| ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token keyword">str</span> key<span class="token punctuation">,</span> <span class="token keyword">int</span> value <span class="token keyword">in</span> aMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">| ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">str</span> char <span class="token keyword">in</span> aString<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">| ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">fib</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">?&gt;</span> fibonnaciFib <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token function">fibonnaci</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token keyword">int</span> value <span class="token keyword">in</span> fibonnaciFib<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">| ...</span>
<span class="token punctuation">}</span>

<span class="token comment">| The key can be omitted</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token keyword">str</span> char <span class="token keyword">in</span> aString<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">| ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token keyword">in</span> <span class="token number">0.</span><span class="token punctuation">.</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">| ...</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5),e=[o];function c(k,l){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","control-flow.html.vue"]]);export{r as default};
