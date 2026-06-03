# crypto

## HashAlgorithm
```buzz
enum HashAlgorithm {
    Md5,
    Sha1,
    Sha224,
    Sha256,
    Sha384,
    Sha512,
    Sha512_224,
    Sha512_256,
    Sha512T256,
    Sha3224,
    Sha3256,
    Sha3384,
    Sha3512,
}
```
Hash algorithms

## hash
```buzz
fun hash(algo: HashAlgorithm, data: str) > str
```
Returns hash of data using given algorithm
- **`algo`:** Hash algorithm to use
- **`data`:** Data to hash
**Returns:** Hash of data has hex string

