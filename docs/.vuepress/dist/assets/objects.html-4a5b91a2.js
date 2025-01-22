import{_ as n,o as s,c as a,a as t}from"./app-30a05bfa.js";const e={},p=t(`<h1 id="objects" tabindex="-1"><a class="header-anchor" href="#objects" aria-hidden="true">#</a> Objects</h1><p>An <code>object</code> is a struct-like data structures.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token keyword">str</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Joe&quot;</span></span><span class="token punctuation">,</span> <span class="token comment">// Fields can have default values</span>
    age<span class="token punctuation">:</span> <span class="token keyword">int</span> <span class="token operator">=</span> <span class="token number">35</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="instanciation" tabindex="-1"><a class="header-anchor" href="#instanciation" aria-hidden="true">#</a> Instanciation</h2><p>Instanciating an object is simple. Properties with default values can be omitted.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">final</span> me <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Giann&quot;</span></span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>If a property value is a variable with the same name as the property, you can omit its name:</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">final</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Giann&quot;</span></span><span class="token punctuation">;</span>

<span class="token keyword">final</span> me <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    name
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="immutability" tabindex="-1"><a class="header-anchor" href="#immutability" aria-hidden="true">#</a> Immutability</h2><p>Objects are immutable by default. To get a mutable instance, use the <code>mut</code> keyword.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">final</span> person <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Joe&quot;</span></span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> mutablePerson <span class="token operator">=</span> <span class="token keyword">mut</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;John&quot;</span></span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;John&quot;</span></span><span class="token punctuation">;</span> <span class="token comment">// Will not compile</span>
mutablePerson<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Joe&quot;</span></span><span class="token punctuation">;</span> <span class="token comment">// Will compile</span>
</code></pre></div><h2 id="final-properties" tabindex="-1"><a class="header-anchor" href="#final-properties" aria-hidden="true">#</a> <code>final</code> properties</h2><p>Properties declared <code>final</code> can only be assigned once even if the instance if mutable.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">final</span> name<span class="token punctuation">:</span> <span class="token keyword">str</span> 
<span class="token punctuation">}</span>

<span class="token keyword">final</span> person <span class="token operator">=</span> <span class="token keyword">mut</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Joe&quot;</span></span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;John&quot;</span></span><span class="token punctuation">;</span> <span class="token comment">// Won&#39;t compile</span>
</code></pre></div><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><p>Methods are function associated with an object. Within a method you can use the current instance of the object with <code>this</code>.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token keyword">str</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Joe&quot;</span></span><span class="token punctuation">,</span> <span class="token comment">// Fields can have default values</span>
    age<span class="token punctuation">:</span> <span class="token keyword">int</span> <span class="token operator">=</span> <span class="token number">35</span><span class="token punctuation">,</span>

    <span class="token comment">// Method</span>
    <span class="token keyword">fun</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        std<span class="token punctuation">\\</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello </span><span class="token interpolation">{this.name}</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="mutating-methods" tabindex="-1"><a class="header-anchor" href="#mutating-methods" aria-hidden="true">#</a> Mutating methods</h3><p>Methods that will modify the instance must be declared with the <code>mut</code> keyword.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>

    <span class="token keyword">mut</span> <span class="token keyword">fun</span> <span class="token function">getOlder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token this constant">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token this constant">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token number">1;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="special-methods" tabindex="-1"><a class="header-anchor" href="#special-methods" aria-hidden="true">#</a> Special methods</h3><h4 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring" aria-hidden="true">#</a> <code>toString</code></h4><p>If your object has a <code>fun toString() &gt; str</code> method, it will be called whenever you interpolate a instance of the object in a string.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token keyword">str</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Joe&quot;</span></span><span class="token punctuation">,</span>

    <span class="token keyword">fun</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token this constant">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//...</span>

<span class="token keyword">final</span> person <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

std<span class="token punctuation">\\</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;His name is </span><span class="token interpolation">{person}</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -&gt; \`His name is Joe\`</span>
</code></pre></div><h5 id="collect" tabindex="-1"><a class="header-anchor" href="#collect" aria-hidden="true">#</a> <code>collect</code></h5><p>If your object has a <code>fun collect() &gt; void</code> method, it which will be called just before the object instance is collected by the garbage collector. It&#39;s useful when your object holds resources that need to be released.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">Data</span> <span class="token punctuation">{</span>
    buffer<span class="token punctuation">:</span> <span class="token class-name">Buffer</span><span class="token punctuation">,</span>

    <span class="token keyword">fun</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        buffer<span class="token punctuation">.</span><span class="token function">deinit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> <code>static</code></h2><p>Objects can have static methods and properties. Meaning they are associated with the object rather than its instances. Objects don&#39;t have constructors but you can use a static method to write one.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>

    <span class="token keyword">static</span> population<span class="token punctuation">:</span> <span class="token keyword">int</span> <span class="token operator">=</span> <span class="token number">0;</span>

    <span class="token keyword">static</span> <span class="token keyword">fun</span> <span class="token function">init</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span><span class="token punctuation">.</span>population <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>population <span class="token operator">+</span> <span class="token number">1;</span>

        <span class="token keyword">return</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
            name <span class="token operator">=</span> name<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="anonymous-objects" tabindex="-1"><a class="header-anchor" href="#anonymous-objects" aria-hidden="true">#</a> Anonymous objects</h2><p>Anonymous objects don&#39;t have methods, static fields or default values and are identified with the keyword <code>obj</code>.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">obj</span><span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token keyword">str</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token keyword">int</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">.</span><span class="token punctuation">{</span>
        name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Joe&quot;</span></span><span class="token punctuation">,</span>
        age <span class="token operator">=</span> <span class="token number">36</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ...</span>

<span class="token keyword">final</span> info <span class="token operator">=</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="tuples" tabindex="-1"><a class="header-anchor" href="#tuples" aria-hidden="true">#</a> Tuples</h3><p>Tuples are anonymous object for which you omit properties name.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> getTuple <span class="token operator">&gt;</span> <span class="token keyword">obj</span><span class="token punctuation">{</span> <span class="token punctuation">:</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token keyword">str</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token keyword">int</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">.</span><span class="token punctuation">{</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;hello&quot;</span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span> <span class="token number">1,</span> <span class="token number">2,</span> <span class="token number">3 </span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You can access its properties like so:</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">final</span> tuple <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">{</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;John&quot;</span></span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

std<span class="token punctuation">\\</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;I&#39;m {tuple@&quot;</span></span><span class="token number">1&quot;</span><span class="token punctuation">}</span> <span class="token keyword">and</span> i&#39;m <span class="token punctuation">{</span>tuple<span class="token punctuation">@</span><span class="token string-literal"><span class="token string">&quot;0&quot;</span></span><span class="token punctuation">}</span>&quot;<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="generic-types" tabindex="-1"><a class="header-anchor" href="#generic-types" aria-hidden="true">#</a> Generic types</h2><p>Generic types can be used by listing them just after the object name:</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">Payload</span><span class="token operator">::</span><span class="token operator">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token class-name">K</span><span class="token punctuation">:</span> <span class="token class-name">V</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">final</span> payload <span class="token operator">=</span> <span class="token class-name">Payload</span><span class="token operator">::</span><span class="token operator">&lt;</span><span class="token keyword">str</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>
    data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string-literal"><span class="token string">&quot;one&quot;</span></span><span class="token punctuation">:</span> <span class="token number">1
</span>    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,41),o=[p];function c(l,u){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","objects.html.vue"]]);export{r as default};
