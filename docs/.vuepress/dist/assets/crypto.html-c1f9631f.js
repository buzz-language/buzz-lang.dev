import{_ as a,o as s,c as n,a as t}from"./app-59cb0b0b.js";const e={},o=t(`<h1 id="crypto" tabindex="-1"><a class="header-anchor" href="#crypto" aria-hidden="true">#</a> crypto</h1><h3 id="hashalgorithm" tabindex="-1"><a class="header-anchor" href="#hashalgorithm" aria-hidden="true">#</a> HashAlgorithm</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">enum</span> <span class="token class-name">HashAlgorithm</span> <span class="token punctuation">{</span>
    <span class="token class-name">Md5</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha1</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha224</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha256</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha384</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha512</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha512256</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha512T256</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha3224</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha3256</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha3384</span><span class="token punctuation">,</span>
    <span class="token class-name">Sha3512</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Hash algorithms</p><h3 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> hash</h3><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token class-name">HashAlgorithm</span> algo<span class="token punctuation">,</span> <span class="token keyword">str</span> data<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">str</span> 
</code></pre></div><p>Returns hash of data using given algorithm</p><ul><li><strong><code>algo</code>:</strong> Hash aglorithm to use</li><li><strong><code>data</code>:</strong> Data to hash</li></ul><p><strong>Returns:</strong> Hash of data has hex string</p>`,9),p=[o];function c(l,h){return s(),n("div",null,p)}const u=a(e,[["render",c],["__file","crypto.html.vue"]]);export{u as default};
