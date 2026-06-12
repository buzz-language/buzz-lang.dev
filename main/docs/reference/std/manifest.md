# manifest

The `buzz:manifest` library defines the types used by `manifest.buzz` and `manifest.lock.buzz`.

## VersionConstraint

```buzz
enum VersionConstraint
```

Supported dependency version constraint operators:

- `lessThan`
- `equalOrLessThan`
- `equalTo`
- `greaterThan`
- `equalOrGreater`
- `majorLessThan`
- `majorEqualOrLessThan`
- `majorEqualTo`
- `majorGreaterThan`
- `majorEqualOrGreater`
- `minorLessThan`
- `minorEqualOrLessThan`
- `minorEqualTo`
- `minorGreaterThan`
- `minorEqualOrGreater`

## Source

```buzz
object Source {
    url: str,
    ref: str?,
    version: obj{ :VersionConstraint, :int, :int, :int }?,
}
```

Dependency source declared in a package manifest.

- `url`: Git URL, archive URL, or local directory path for the dependency.
- `ref`: optional Git ref, tag, or commit to fetch.
- `version`: optional semantic version constraint used to resolve a Git tag.

## Manifest

```buzz
object Manifest {
    name: str,
    version: obj{ :int, :int, :int },
    source: Source,
    dependencies: {str: Source} = {},
    devDependencies: {str: Source} = {},
    build: {str: [[str]]} = {},
    rootDir: str = "src",
    description: str?,
    authors: [str] = [],
    tags: [str] = [],
    license: str?,
    homepage: str?,
}
```

Package manifest describing a buzz package and its dependencies.

## ResolvedSource

```buzz
object ResolvedSource {
    url: str,
    ref: str?,
    hash: str,
}
```

Dependency source resolved and recorded in a manifest lock file.

- `url`: Git URL, archive URL, or local directory path used to fetch the dependency.
- `ref`: resolved Git ref, tag, or commit when applicable.
- `hash`: SHA-256 content hash of the fetched dependency tree.

## ManifestLock

```buzz
object ManifestLock {
    dependencies: {str: ResolvedSource} = {},
    devDependencies: {str: ResolvedSource} = {},
}
```

Lock file describing the exact dependency sources fetched for a package.
