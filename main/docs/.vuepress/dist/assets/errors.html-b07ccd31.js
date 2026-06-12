import{_ as n,o as s,c as a,a as e}from"./app-02b92720.js";const p={},t=e(`<h1 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> errors</h1><h2 id="filesystemerror" tabindex="-1"><a class="header-anchor" href="#filesystemerror" aria-hidden="true">#</a> FileSystemError</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">enum</span> <span class="token class-name">FileSystemError</span> <span class="token punctuation">{</span>
    <span class="token class-name">AccessDenied</span><span class="token punctuation">,</span>
    <span class="token class-name">AntivirusInterference</span><span class="token punctuation">,</span>
    <span class="token class-name">BadPathName</span><span class="token punctuation">,</span>
    <span class="token class-name">Canceled</span><span class="token punctuation">,</span>
    <span class="token class-name">CrossDevice</span><span class="token punctuation">,</span>
    <span class="token class-name">ConcurrencyUnavailable</span><span class="token punctuation">,</span>
    <span class="token class-name">DeviceBusy</span><span class="token punctuation">,</span>
    <span class="token class-name">DirNotEmpty</span><span class="token punctuation">,</span>
    <span class="token class-name">DiskQuota</span><span class="token punctuation">,</span>
    <span class="token class-name">FastOpenAlreadyInProgress</span><span class="token punctuation">,</span>
    <span class="token class-name">FileBusy</span><span class="token punctuation">,</span>
    <span class="token class-name">FileDescriptorNotASocket</span><span class="token punctuation">,</span>
    <span class="token class-name">FileLocksUnsupported</span><span class="token punctuation">,</span>
    <span class="token class-name">FileNotFound</span><span class="token punctuation">,</span>
    <span class="token class-name">FileSystem</span><span class="token punctuation">,</span>
    <span class="token class-name">FileTooBig</span><span class="token punctuation">,</span>
    <span class="token class-name">HardwareFailure</span><span class="token punctuation">,</span>
    <span class="token class-name">InputOutput</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidBatchScriptArg</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidHandle</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidUtf8</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidWtf8</span><span class="token punctuation">,</span>
    <span class="token class-name">IsDir</span><span class="token punctuation">,</span>
    <span class="token class-name">LinkQuotaExceeded</span><span class="token punctuation">,</span>
    <span class="token class-name">NameTooLong</span><span class="token punctuation">,</span>
    <span class="token class-name">NetworkSubsystemFailed</span><span class="token punctuation">,</span>
    <span class="token class-name">NetworkNotFound</span><span class="token punctuation">,</span>
    <span class="token class-name">NoDevice</span><span class="token punctuation">,</span>
    <span class="token class-name">NoSpaceLeft</span><span class="token punctuation">,</span>
    <span class="token class-name">NonCanonical</span><span class="token punctuation">,</span>
    <span class="token class-name">NotDir</span><span class="token punctuation">,</span>
    <span class="token class-name">Unsupported</span><span class="token punctuation">,</span>
    <span class="token class-name">OperationUnsupported</span><span class="token punctuation">,</span>
    <span class="token class-name">PathAlreadyExists</span><span class="token punctuation">,</span>
    <span class="token class-name">PermissionDenied</span><span class="token punctuation">,</span>
    <span class="token class-name">PipeBusy</span><span class="token punctuation">,</span>
    <span class="token class-name">ProcessFdQuotaExceeded</span><span class="token punctuation">,</span>
    <span class="token class-name">ReadOnlyFileSystem</span><span class="token punctuation">,</span>
    <span class="token class-name">RenameAcrossMountPoints</span><span class="token punctuation">,</span>
    <span class="token class-name">SharingViolation</span><span class="token punctuation">,</span>
    <span class="token class-name">SocketNotConnected</span><span class="token punctuation">,</span>
    <span class="token class-name">SymLinkLoop</span><span class="token punctuation">,</span>
    <span class="token class-name">SystemFdQuotaExceeded</span><span class="token punctuation">,</span>
    <span class="token class-name">SystemResources</span><span class="token punctuation">,</span>
    <span class="token class-name">UnrecognizedVolume</span><span class="token punctuation">,</span>
    <span class="token class-name">WouldBlock</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Errors raised by filesystem operations.</p><h2 id="execerror" tabindex="-1"><a class="header-anchor" href="#execerror" aria-hidden="true">#</a> ExecError</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">enum</span> <span class="token class-name">ExecError</span> <span class="token punctuation">{</span>
    <span class="token class-name">AccessDenied</span><span class="token punctuation">,</span>
    <span class="token class-name">ChildExecFailed</span><span class="token punctuation">,</span>
    <span class="token class-name">CurrentWorkingDirectoryUnlinked</span><span class="token punctuation">,</span>
    <span class="token class-name">Canceled</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidExe</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidBatchScriptArg</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidFileDescriptor</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidName</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidProcessGroupId</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidUserId</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidWtf8</span><span class="token punctuation">,</span>
    <span class="token class-name">OperationUnsupported</span><span class="token punctuation">,</span>
    <span class="token class-name">PermissionDenied</span><span class="token punctuation">,</span>
    <span class="token class-name">ProcessAlreadyExec</span><span class="token punctuation">,</span>
    <span class="token class-name">ProcessNotFound</span><span class="token punctuation">,</span>
    <span class="token class-name">ResourceLimitReached</span><span class="token punctuation">,</span>
    <span class="token class-name">TooBig</span><span class="token punctuation">,</span>
    <span class="token class-name">WaitAbandoned</span><span class="token punctuation">,</span>
    <span class="token class-name">WaitTimeOut</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Errors raised while spawning or waiting for child processes.</p><h2 id="socketerror" tabindex="-1"><a class="header-anchor" href="#socketerror" aria-hidden="true">#</a> SocketError</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">enum</span> <span class="token class-name">SocketError</span> <span class="token punctuation">{</span>
    <span class="token class-name">AccessDenied</span><span class="token punctuation">,</span>
    <span class="token class-name">AddressFamilyUnsupported</span><span class="token punctuation">,</span>
    <span class="token class-name">AddressInUse</span><span class="token punctuation">,</span>
    <span class="token class-name">AddressUnavailable</span><span class="token punctuation">,</span>
    <span class="token class-name">AddressNotResolved</span><span class="token punctuation">,</span>
    <span class="token class-name">AlreadyBound</span><span class="token punctuation">,</span>
    <span class="token class-name">AlreadyConnected</span><span class="token punctuation">,</span>
    <span class="token class-name">BlockedByFirewall</span><span class="token punctuation">,</span>
    <span class="token class-name">Canceled</span><span class="token punctuation">,</span>
    <span class="token class-name">ConnectionAborted</span><span class="token punctuation">,</span>
    <span class="token class-name">ConnectionPending</span><span class="token punctuation">,</span>
    <span class="token class-name">ConnectionRefused</span><span class="token punctuation">,</span>
    <span class="token class-name">ConnectionResetByPeer</span><span class="token punctuation">,</span>
    <span class="token class-name">ConnectionTimedOut</span><span class="token punctuation">,</span>
    <span class="token class-name">DetectingNetworkConfigurationFailed</span><span class="token punctuation">,</span>
    <span class="token class-name">FileDescriptorNotASocket</span><span class="token punctuation">,</span>
    <span class="token class-name">FileNotFound</span><span class="token punctuation">,</span>
    <span class="token class-name">HostLacksNetworkAddresses</span><span class="token punctuation">,</span>
    <span class="token class-name">HostUnreachable</span><span class="token punctuation">,</span>
    <span class="token class-name">Incomplete</span><span class="token punctuation">,</span>
    <span class="token class-name">InterfaceNotFound</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidDnsAAAARecord</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidDnsARecord</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidDnsCnameRecord</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidCharacter</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidEnd</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidIPAddressFormat</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidIpv4Mapping</span><span class="token punctuation">,</span>
    <span class="token class-name">InvalidProtocolOption</span><span class="token punctuation">,</span>
    <span class="token class-name">MessageTooBig</span><span class="token punctuation">,</span>
    <span class="token class-name">NameServerFailure</span><span class="token punctuation">,</span>
    <span class="token class-name">NetworkSubsystemFailed</span><span class="token punctuation">,</span>
    <span class="token class-name">NetworkUnreachable</span><span class="token punctuation">,</span>
    <span class="token class-name">NetworkDown</span><span class="token punctuation">,</span>
    <span class="token class-name">NoAddressReturned</span><span class="token punctuation">,</span>
    <span class="token class-name">NotDir</span><span class="token punctuation">,</span>
    <span class="token class-name">OperationUnsupported</span><span class="token punctuation">,</span>
    <span class="token class-name">OptionUnsupported</span><span class="token punctuation">,</span>
    <span class="token class-name">PermissionDenied</span><span class="token punctuation">,</span>
    <span class="token class-name">ProcessFdQuotaExceeded</span><span class="token punctuation">,</span>
    <span class="token class-name">ProtocolFailure</span><span class="token punctuation">,</span>
    <span class="token class-name">ProtocolFamilyNotAvailable</span><span class="token punctuation">,</span>
    <span class="token class-name">ProtocolUnsupported</span><span class="token punctuation">,</span>
    <span class="token class-name">ProtocolUnsupportedByAddressFamily</span><span class="token punctuation">,</span>
    <span class="token class-name">ProtocolUnsupportedBySystem</span><span class="token punctuation">,</span>
    <span class="token class-name">ReadOnlyFileSystem</span><span class="token punctuation">,</span>
    <span class="token class-name">ResolvConfParseFailed</span><span class="token punctuation">,</span>
    <span class="token class-name">ResolveConfParseFailed</span><span class="token punctuation">,</span>
    <span class="token class-name">ServiceUnavailable</span><span class="token punctuation">,</span>
    <span class="token class-name">SocketModeUnsupported</span><span class="token punctuation">,</span>
    <span class="token class-name">SocketNotBound</span><span class="token punctuation">,</span>
    <span class="token class-name">SocketNotListening</span><span class="token punctuation">,</span>
    <span class="token class-name">SocketTypeUnsupported</span><span class="token punctuation">,</span>
    <span class="token class-name">SymLinkLoop</span><span class="token punctuation">,</span>
    <span class="token class-name">SystemFdQuotaExceeded</span><span class="token punctuation">,</span>
    <span class="token class-name">SystemResources</span><span class="token punctuation">,</span>
    <span class="token class-name">TemporaryNameServerFailure</span><span class="token punctuation">,</span>
    <span class="token class-name">Timeout</span><span class="token punctuation">,</span>
    <span class="token class-name">TimeoutTooBig</span><span class="token punctuation">,</span>
    <span class="token class-name">UnknownHostName</span><span class="token punctuation">,</span>
    <span class="token class-name">WouldBlock</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Errors raised by socket and networking operations.</p><h2 id="readwriteerror" tabindex="-1"><a class="header-anchor" href="#readwriteerror" aria-hidden="true">#</a> ReadWriteError</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">enum</span> <span class="token class-name">ReadWriteError</span> <span class="token punctuation">{</span>
    <span class="token class-name">BrokenPipe</span><span class="token punctuation">,</span>
    <span class="token class-name">ConnectionResetByPeer</span><span class="token punctuation">,</span>
    <span class="token class-name">ConnectionTimedOut</span><span class="token punctuation">,</span>
    <span class="token class-name">LockViolation</span><span class="token punctuation">,</span>
    <span class="token class-name">NetNameDeleted</span><span class="token punctuation">,</span>
    <span class="token class-name">NotOpenForReading</span><span class="token punctuation">,</span>
    <span class="token class-name">NotOpenForWriting</span><span class="token punctuation">,</span>
    <span class="token class-name">OperationAborted</span><span class="token punctuation">,</span>
    <span class="token class-name">ReadFailed</span><span class="token punctuation">,</span>
    <span class="token class-name">StreamTooLong</span><span class="token punctuation">,</span>
    <span class="token class-name">WriteFailed</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Errors raised while reading from or writing to streams.</p><h2 id="compileerror" tabindex="-1"><a class="header-anchor" href="#compileerror" aria-hidden="true">#</a> CompileError</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">CompileError</span>
</code></pre></div><p>Error raised when Buzz source cannot be compiled.</p><h2 id="interpreterror" tabindex="-1"><a class="header-anchor" href="#interpreterror" aria-hidden="true">#</a> InterpretError</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">InterpretError</span>
</code></pre></div><p>Error raised when Buzz bytecode cannot be interpreted.</p><h2 id="invalidargumenterror" tabindex="-1"><a class="header-anchor" href="#invalidargumenterror" aria-hidden="true">#</a> InvalidArgumentError</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">InvalidArgumentError</span>
</code></pre></div><p>Error raised when an argument is invalid for an operation.</p><h2 id="notyetimplementederror" tabindex="-1"><a class="header-anchor" href="#notyetimplementederror" aria-hidden="true">#</a> NotYetImplementedError</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">NotYetImplementedError</span>
</code></pre></div><p>Error raised for functionality that is not implemented yet.</p><h2 id="overflowerror" tabindex="-1"><a class="header-anchor" href="#overflowerror" aria-hidden="true">#</a> OverflowError</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">OverflowError</span>
</code></pre></div><p>Error raised when an operation overflows.</p><h2 id="underflowerror" tabindex="-1"><a class="header-anchor" href="#underflowerror" aria-hidden="true">#</a> UnderflowError</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">UnderflowError</span>
</code></pre></div><p>Error raised when an operation underflows.</p><h2 id="unexpectederror" tabindex="-1"><a class="header-anchor" href="#unexpectederror" aria-hidden="true">#</a> UnexpectedError</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">object</span> <span class="token class-name">UnexpectedError</span>
</code></pre></div><p>Error raised when an unexpected failure occurs.</p>`,34),o=[t];function c(l,r){return s(),a("div",null,o)}const i=n(p,[["render",c],["__file","errors.html.vue"]]);export{i as default};
