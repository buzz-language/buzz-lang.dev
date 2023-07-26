import{_ as a,o as n,c as s,a as e}from"./app-a5186c77.js";const t={},o=e(`<h1 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json</h1><h2 id="json-1" tabindex="-1"><a class="header-anchor" href="#json-1" aria-hidden="true">#</a> Json</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">Json</span>
</code></pre></div><p>Utility object to manage data from a JSON string</p><h3 id="encode" tabindex="-1"><a class="header-anchor" href="#encode" aria-hidden="true">#</a> encode</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">encode</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Json</span><span class="token punctuation">,</span> <span class="token keyword">void</span><span class="token punctuation">}</span><span class="token operator">?</span> seen<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">str</span>
</code></pre></div><p>Encode to a JSON string</p><p><strong>Returns:</strong> The JSON string</p><h3 id="decode" tabindex="-1"><a class="header-anchor" href="#decode" aria-hidden="true">#</a> decode</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">static</span> <span class="token keyword">fun</span> <span class="token function">decode</span><span class="token punctuation">(</span><span class="token keyword">str</span> json<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token class-name">Json</span> <span class="token operator">!&gt;</span> <span class="token class-name">JsonParseError</span><span class="token punctuation">,</span> <span class="token class-name">WriteWhileReadingError</span>
</code></pre></div><p>Decode string into a <code>Json</code> instance</p><ul><li><strong><code>json</code>:</strong> The JSON string</li></ul><p><strong>Returns:</strong> A <code>Json</code> instance wrapping the decoded data</p><h3 id="q" tabindex="-1"><a class="header-anchor" href="#q" aria-hidden="true">#</a> q</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">q</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">str</span><span class="token punctuation">]</span> path<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token class-name">Json</span>
</code></pre></div><p>Query the json element at <code>path</code>, if nothing matches return <code>Json{}</code></p><ul><li><strong><code>path</code>:</strong> Path to query</li></ul><p><strong>Returns:</strong> Found <code>Json</code> or <code>Json{}</code> (which wraps <code>null</code>)</p><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">str</span><span class="token operator">?</span> string
</code></pre></div><p>When wrapped data is a string</p><h3 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> boolean</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">bool</span><span class="token operator">?</span> boolean
</code></pre></div><p>When wrapped data is a boolean</p><h3 id="integer" tabindex="-1"><a class="header-anchor" href="#integer" aria-hidden="true">#</a> integer</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">int</span><span class="token operator">?</span> integer
</code></pre></div><p>When wrapped data is a int</p><h3 id="floating" tabindex="-1"><a class="header-anchor" href="#floating" aria-hidden="true">#</a> floating</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">float</span><span class="token operator">?</span> floating
</code></pre></div><p>When wrapped data is a float</p><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token punctuation">{</span><span class="token keyword">str</span><span class="token punctuation">,</span> <span class="token class-name">Json</span><span class="token punctuation">}</span><span class="token operator">?</span> map
</code></pre></div><p>When wrapped data is an object, object property values are themselves wrapped in a <code>Json</code></p><h3 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token punctuation">[</span><span class="token class-name">Json</span><span class="token punctuation">]</span><span class="token operator">?</span> list
</code></pre></div><p>When wrapped data is a list, list elements are themselves warpped in a <code>Json</code></p><h3 id="stringvalue" tabindex="-1"><a class="header-anchor" href="#stringvalue" aria-hidden="true">#</a> stringValue</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">stringValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">str</span>
</code></pre></div><p><strong>Returns:</strong> wrapped data string value or empty string if not a string</p><h3 id="booleanvalue" tabindex="-1"><a class="header-anchor" href="#booleanvalue" aria-hidden="true">#</a> booleanValue</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">booleanValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">bool</span>
</code></pre></div><p><strong>Returns:</strong> wrapped data boolean value or <code>false</code> if not a boolean</p><h3 id="integervalue" tabindex="-1"><a class="header-anchor" href="#integervalue" aria-hidden="true">#</a> integerValue</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">integerValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">int</span>
</code></pre></div><p><strong>Returns:</strong> wrapped data number value or <code>0</code> if not an integer</p><h3 id="floatingvalue" tabindex="-1"><a class="header-anchor" href="#floatingvalue" aria-hidden="true">#</a> floatingValue</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">floatingValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">float</span>
</code></pre></div><p><strong>Returns:</strong> wrapped data number value or <code>0</code> if not a float</p><h3 id="mapvalue" tabindex="-1"><a class="header-anchor" href="#mapvalue" aria-hidden="true">#</a> mapValue</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">mapValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token keyword">str</span><span class="token punctuation">,</span> <span class="token class-name">Json</span><span class="token punctuation">}</span>
</code></pre></div><p><strong>Returns:</strong> wrapped data map value or empty map if not a map</p><h3 id="listvalue" tabindex="-1"><a class="header-anchor" href="#listvalue" aria-hidden="true">#</a> listValue</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">listValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Json</span><span class="token punctuation">]</span>
</code></pre></div><p><strong>Returns:</strong> wrapped data list value or empty list if not a list</p>`,54),p=[o];function c(r,l){return n(),s("div",null,p)}const u=a(t,[["render",c],["__file","json.html.vue"]]);export{u as default};