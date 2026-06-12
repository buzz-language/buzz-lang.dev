import{_ as a,o as s,c as n,a as t}from"./app-02b92720.js";const e={},o=t(`<h1 id="crypto" tabindex="-1"><a class="header-anchor" href="#crypto" aria-hidden="true">#</a> crypto</h1><h2 id="hashalgorithm" tabindex="-1"><a class="header-anchor" href="#hashalgorithm" aria-hidden="true">#</a> HashAlgorithm</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">enum</span> <span class="token class-name">HashAlgorithm</span> <span class="token punctuation">{</span>
    <span class="token class-name">Md5</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha1</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha224</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha256</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha384</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha512</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha512_224</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha512_256</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha512T256</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha3224</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha3256</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha3384</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha3512</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Hash algorithms</p><h2 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> hash</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function-definition function">hash</span><span class="token punctuation">(</span>algo<span class="token punctuation">:</span> <span class="token class-name">HashAlgorithm</span><span class="token punctuation">,</span> data<span class="token punctuation">:</span> <span class="token keyword">str</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">str</span>
</code></pre></div><p>Returns hash of data using given algorithm</p><ul><li><strong><code>algo</code>:</strong> Hash algorithm to use</li><li><strong><code>data</code>:</strong> Data to hash <strong>Returns:</strong> Hash of data has hex string</li></ul>`,8),p=[o];function c(l,u){return s(),n("div",null,p)}const i=a(e,[["render",c],["__file","crypto.html.vue"]]);export{i as default};
