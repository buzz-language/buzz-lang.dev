import{_ as n,o as a,c as s,a as o}from"./app-82c48830.js";const t={},p=o(`<h1 id="control-flow" tabindex="-1"><a class="header-anchor" href="#control-flow" aria-hidden="true">#</a> Control flow</h1><h2 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> <code>if</code></h2><p>The <code>if</code> statement is pretty much what you would expect.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token comment">| The usual</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>someCondition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">| ...</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>anotherCondition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">| ...</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">| ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You can unwrap an optional with the <code>-&gt;</code> operator.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>opt <span class="token operator">-&gt;</span> unwrapped<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>unwrapped<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You can downcast a value with the <code>as</code> operator.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">any</span> anything <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;hello&quot;</span></span><span class="token punctuation">;</span>

<span class="token comment">|...</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>anything <span class="token keyword">as</span> <span class="token keyword">str</span> something<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>something<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>if</code> can also be inlined and act as an expression. However this expression does not support <code>null</code> unwrapping or downcasting (those are available in expression using <code>??</code> and <code>as?</code>);</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">int</span> value <span class="token operator">=</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>something <span class="token operator">&gt;</span> <span class="token number">0)</span> <span class="token number">12</span> <span class="token keyword">else</span> <span class="token number">13</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="while-and-do-until" tabindex="-1"><a class="header-anchor" href="#while-and-do-until" aria-hidden="true">#</a> <code>while</code> and <code>do .. until</code></h2><p>Repeat a block of statements <code>while</code> or <code>until</code> a condition is <code>true</code>.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">do</span> <span class="token punctuation">{</span>
    j <span class="token operator">=</span> j <span class="token operator">-</span> <span class="token number">1;</span>
<span class="token punctuation">}</span> <span class="token keyword">until</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">0)</span>
</code></pre></div><h2 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> <code>for</code></h2><p><code>for</code> is pretty much the same statement as in C.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1)</span> <span class="token punctuation">{</span>
    <span class="token comment">| ...</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> <code>foreach</code></h2><p><code>foreach</code> can iterate over most data structures. The key/index variable can be omitted.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name">SomeEnum</span> case <span class="token keyword">in</span> <span class="token class-name">SomeEnum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre></div><h2 id="break-and-continue" tabindex="-1"><a class="header-anchor" href="#break-and-continue" aria-hidden="true">#</a> <code>break</code> and <code>continue</code></h2><p><code>break</code> will stop a loop.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>continue</code> will skip any following statement and start the loop again.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;not reached if \`condition\` is true&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You can add a label to any loop and <code>break</code>/<code>continue</code> to it. This is useful when you have nested loops and want to break to an upper scope:</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">:</span>here <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span> here<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;not reached if \`condition\` is true&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="block-expression" tabindex="-1"><a class="header-anchor" href="#block-expression" aria-hidden="true">#</a> Block expression</h2><p>Block expression are lexical blocks that produce a value:</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token keyword">from</span> <span class="token punctuation">{</span>
    <span class="token comment">| Doing so work here...</span>

    <span class="token keyword">out</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>out</code> must appear once at the end of the block.</p>`,30),e=[p];function c(l,u){return a(),s("div",null,e)}const k=n(t,[["render",c],["__file","control-flow.html.vue"]]);export{k as default};
