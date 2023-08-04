import{_ as a,o as e,c as n,a as s}from"./app-fbd0afb9.js";const t={},o=s(`<h1 id="serialize" tabindex="-1"><a class="header-anchor" href="#serialize" aria-hidden="true">#</a> serialize</h1><h2 id="boxed" tabindex="-1"><a class="header-anchor" href="#boxed" aria-hidden="true">#</a> Boxed</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">Boxed</span>
</code></pre></div><p>Utility object to manage deserialized data from, for example, decoded JSON</p><h3 id="q" tabindex="-1"><a class="header-anchor" href="#q" aria-hidden="true">#</a> q</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">q</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">str</span><span class="token punctuation">]</span> path<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token class-name">Boxed</span>
</code></pre></div><p>Query the json element at <code>path</code>, if nothing matches return <code>Boxed{}</code></p><ul><li><strong><code>path</code>:</strong> Path to query</li></ul><p><strong>Returns:</strong> Found <code>Boxed</code> or <code>Boxed{}</code> (which wraps <code>null</code>)</p><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">str</span><span class="token operator">?</span> string
</code></pre></div><p>When wrapped data is a string</p><h3 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> boolean</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">bool</span><span class="token operator">?</span> boolean
</code></pre></div><p>When wrapped data is a boolean</p><h3 id="integer" tabindex="-1"><a class="header-anchor" href="#integer" aria-hidden="true">#</a> integer</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">int</span><span class="token operator">?</span> integer
</code></pre></div><p>When wrapped data is a int</p><h3 id="floating" tabindex="-1"><a class="header-anchor" href="#floating" aria-hidden="true">#</a> floating</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">float</span><span class="token operator">?</span> floating
</code></pre></div><p>When wrapped data is a float</p><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token punctuation">{</span><span class="token keyword">str</span><span class="token punctuation">,</span> <span class="token class-name">Boxed</span><span class="token punctuation">}</span><span class="token operator">?</span> map
</code></pre></div><p>When wrapped data is an object, object property values are themselves wrapped in a <code>Boxed</code></p><h3 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token punctuation">[</span><span class="token class-name">Boxed</span><span class="token punctuation">]</span><span class="token operator">?</span> list
</code></pre></div><p>When wrapped data is a list, list elements are themselves warpped in a <code>Boxed</code></p><h3 id="stringvalue" tabindex="-1"><a class="header-anchor" href="#stringvalue" aria-hidden="true">#</a> stringValue</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">stringValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">str</span>
</code></pre></div><p><strong>Returns:</strong> wrapped data string value or empty string if not a string</p><h3 id="booleanvalue" tabindex="-1"><a class="header-anchor" href="#booleanvalue" aria-hidden="true">#</a> booleanValue</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">booleanValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">bool</span>
</code></pre></div><p><strong>Returns:</strong> wrapped data boolean value or <code>false</code> if not a boolean</p><h3 id="integervalue" tabindex="-1"><a class="header-anchor" href="#integervalue" aria-hidden="true">#</a> integerValue</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">integerValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">int</span>
</code></pre></div><p><strong>Returns:</strong> wrapped data number value or <code>0</code> if not an integer</p><h3 id="floatingvalue" tabindex="-1"><a class="header-anchor" href="#floatingvalue" aria-hidden="true">#</a> floatingValue</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">floatingValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">float</span>
</code></pre></div><p><strong>Returns:</strong> wrapped data number value or <code>0</code> if not a float</p><h3 id="mapvalue" tabindex="-1"><a class="header-anchor" href="#mapvalue" aria-hidden="true">#</a> mapValue</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">mapValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token keyword">str</span><span class="token punctuation">,</span> <span class="token class-name">Boxed</span><span class="token punctuation">}</span>
</code></pre></div><p><strong>Returns:</strong> wrapped data map value or empty map if not a map</p><h3 id="listvalue" tabindex="-1"><a class="header-anchor" href="#listvalue" aria-hidden="true">#</a> listValue</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">listValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Boxed</span><span class="token punctuation">]</span>
</code></pre></div><p><strong>Returns:</strong> wrapped data list value or empty list if not a list</p>`,45),p=[o];function r(l,c){return e(),n("div",null,p)}const i=a(t,[["render",r],["__file","serialize.html.vue"]]);export{i as default};
