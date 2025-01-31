import{_ as n,o as s,c as a,a as t}from"./app-30a05bfa.js";const p={},o=t(`<h1 id="protocols" tabindex="-1"><a class="header-anchor" href="#protocols" aria-hidden="true">#</a> Protocols</h1><p>A <code>protocol</code> is a set of methods. Objects can conform to any number of them:</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">protocol</span> <span class="token class-name">Translatable</span> <span class="token punctuation">{</span>
    <span class="token keyword">mut</span> <span class="token keyword">fun</span> <span class="token function">translate</span><span class="token punctuation">(</span>dx<span class="token punctuation">:</span> <span class="token keyword">int</span><span class="token punctuation">,</span> dy<span class="token punctuation">:</span> <span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">protocol</span> <span class="token class-name">Printable</span> <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">object</span><span class="token operator">&lt;</span><span class="token class-name">Translatable</span><span class="token punctuation">,</span> <span class="token class-name">Printable</span><span class="token operator">&gt;</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">:</span> <span class="token keyword">int</span><span class="token punctuation">,</span>
    y<span class="token punctuation">:</span> <span class="token keyword">int</span><span class="token punctuation">,</span>

    <span class="token keyword">mut</span> <span class="token keyword">fun</span> <span class="token function">translate</span><span class="token punctuation">(</span>dx<span class="token punctuation">:</span> <span class="token keyword">int</span><span class="token punctuation">,</span> dy<span class="token punctuation">:</span> <span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token this constant">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token this constant">this</span><span class="token punctuation">.</span>x <span class="token operator">+</span> dx<span class="token punctuation">;</span>
        <span class="token this constant">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token this constant">this</span><span class="token punctuation">.</span>y <span class="token operator">+</span> dy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">fun</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        std<span class="token punctuation">\\</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Point (</span><span class="token interpolation">{this.x}</span><span class="token string">, </span><span class="token interpolation">{this.y}</span><span class="token string">)&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">object</span><span class="token operator">&lt;</span><span class="token class-name">Printable</span><span class="token operator">&gt;</span> <span class="token class-name">Line</span> <span class="token punctuation">{</span>
    start<span class="token punctuation">:</span> <span class="token class-name">Point</span><span class="token punctuation">,</span>
    end<span class="token punctuation">:</span> <span class="token class-name">Point</span><span class="token punctuation">,</span>

    <span class="token keyword">fun</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        std<span class="token punctuation">\\</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Line (</span><span class="token interpolation">{this.start.x}</span><span class="token string">, </span><span class="token interpolation">{this.start.y}</span><span class="token string">) (</span><span class="token interpolation">{this.end.x}</span><span class="token string">, </span><span class="token interpolation">{this.end.y}</span><span class="token string">)&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ...</span>

<span class="token keyword">final</span> elements <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token class-name">Point</span><span class="token punctuation">{</span> x <span class="token operator">=</span> <span class="token number">0,</span> y <span class="token operator">=</span> <span class="token number">0 </span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token class-name">Line</span><span class="token punctuation">{</span>
        start <span class="token operator">=</span> <span class="token class-name">Point</span><span class="token punctuation">{</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        end <span class="token operator">=</span> <span class="token class-name">Point</span><span class="token punctuation">{</span> x <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span>element <span class="token keyword">in</span> elements<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    element<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),c=[o];function e(l,k){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","protocols.html.vue"]]);export{i as default};
