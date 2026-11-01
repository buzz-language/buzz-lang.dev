# http

## HttpError
```buzz
enum HttpError {
    CertificateBundleLoadFailure,
    ClientCollected,
    CompressionInitializationFailed,
    CompressionUnsupported,
    ConnectionRefused,
    ConnectionResetByPeer,
    ConnectionTimedOut,
    DecompressionFailure,
    EndOfStream,
    HostLacksNetworkAddresses,
    HttpChunkInvalid,
    HttpChunkTruncated,
    HttpConnectionClosing,
    HttpConnectionHeaderUnsupported,
    HttpContentEncodingUnsupported,
    HttpHeaderContinuationsUnsupported,
    HttpHeadersInvalid,
    HttpHeadersOversize,
    HttpRedirectLocationInvalid,
    HttpRedirectLocationMissing,
    HttpRedirectLocationOversize,
    HttpRequestTruncated,
    HttpTransferEncodingUnsupported,
    InvalidCharacter,
    InvalidContentLength,
    InvalidFormat,
    InvalidHostName,
    InvalidPort,
    InvalidTrailers,
    MalformedUri,
    NameServerFailure,
    NetworkUnreachable,
    Overflow,
    RedirectRequiresResend,
    RequestCollected,
    StreamTooLong,
    TemporaryNameServerFailure,
    TlsAlert,
    TlsFailure,
    TlsInitializationFailed,
    TooManyHttpRedirects,
    UnexpectedCharacter,
    UnexpectedConnectFailure,
    UnexpectedReadFailure,
    UnexpectedWriteFailure,
    UnknownHostName,
    UnsupportedCompressionMethod,
    UnsupportedTransferEncoding,
    UnsupportedUriScheme,
    UriMissingHost,
}
```
Errors raised by HTTP client operations.

## Method
```buzz
enum<str> Method {
    GET,
    HEAD,
    POST,
    PUT,
    DELETE,
    CONNECT,
    OPTIONS,
    TRACE,
    PATCH,
}
```
HTTP request method.

## HttpParseError
```buzz
object HttpParseError
```
Error raised when an HTTP response cannot be parsed.

## Client
```buzz
object Client
```
HTTP client used to send requests.

### init
```buzz
static fun init() > Client !> HttpError
```
Creates a new HTTP client.
**Returns:** A new `Client`

### send
```buzz
fun send(request: mut Request) > Response *> void !> HttpError, SocketError, ReadWriteError, UnexpectedError, InvalidArgumentError, HttpParseError
```
Sends a request and waits asynchronously for the response.
- **`request`:** Request to send
**Returns:** Response from the server

### start
```buzz
fun start(request: mut Request) > mut Request !> HttpError, SocketError, ReadWriteError, UnexpectedError
```
Starts a request without waiting for the response.
- **`request`:** Request to start
**Returns:** The started request

### collect
```buzz
fun collect() > void
```
Releases resources owned by the client.

## Request
```buzz
object Request
```
HTTP request data.

### body
```buzz
body: str?
```
Optional request body.

### headers
```buzz
headers: {str: str}
```
Request headers.

### method
```buzz
method: Method
```
Request method.

### uri
```buzz
uri: str
```
Request URI.

### wait
```buzz
fun wait() > Response !> HttpError, SocketError, ReadWriteError, UnexpectedError, InvalidArgumentError, HttpParseError
```
Waits for a started request to complete.
**Returns:** Response from the server

### toString
```buzz
fun toString() > str
```
Render this request as an HTTP/1.1 request string.
**Returns:** request string

### collect
```buzz
fun collect() > void
```
Releases resources owned by the request.

## Response
```buzz
object Response
```
HTTP response data.

### body
```buzz
body: str?
```
Optional response body.

### headers
```buzz
headers: {str: str}
```
Response headers.

### status
```buzz
status: int
```
HTTP status code.

