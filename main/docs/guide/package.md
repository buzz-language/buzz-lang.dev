# Package

A buzz package is a directory with a `manifest.buzz` file. Package commands use this manifest to resolve dependencies and run package scripts.

## manifest.buzz

`manifest.buzz` is a buzz object literal describing the package:

```buzz
.{
    name = "hello",
    version = .{ 1, 0, 0 },
    source = .{ url = "https://github.com/example/hello.git" },
    dependencies = {
        "logger": .{
            url = "https://github.com/example/logger.git",
            ref = "v1.2.0",
        },
    },
}
```

The required fields are:

- `name`: the package name used by `pkg:` imports.
- `version`: semantic version as `.{ major, minor, patch }`.
- `source`: where this package is fetched from.

Dependencies are declared in `dependencies` and development-only dependencies in `devDependencies`. A dependency source can be a Git URL, a `.tar.gz` or `.tgz` archive URL or path, or a local directory path. Git dependencies can use `ref` for a branch, tag, or commit. They can also use `version` to resolve a semantic-version tag.

Optional manifest fields include:

- `description`: package summary.
- `authors`: package authors.
- `tags`: search or classification tags.
- `license`: package license.
- `homepage`: package homepage.
- `rootDir`: directory containing buzz sources, defaulting to `src`.
- `build`: named build steps. Each step is a list of command argument lists.

Build steps are run for dependencies when `buzz fetch` downloads them for the first time:

```buzz
.{
    name = "native-logger",
    version = .{ 1, 0, 0 },
    source = .{ url = "https://github.com/example/native-logger.git" },
    build = {
        "native-logger": [[ "zig", "build" ]],
    },
}
```

Version constraints can be used instead of a fixed `ref` when resolving Git tags:

```buzz
.{
    name = "app",
    version = .{ 1, 0, 0 },
    source = .{ url = "." },
    dependencies = {
        "logger": .{
            url = "https://github.com/example/logger.git",
            version = .{ .majorEqualTo, 1, 2, 0 },
        },
    },
}
```

The first item is the constraint, followed by major, minor, and patch numbers. See [`buzz:manifest`](/main/reference/std/manifest.html) for the full manifest type definitions.

## buzz fetch

Run `buzz fetch` from the package root to prepare dependencies:

```zsh
buzz fetch
```

The command reads `manifest.buzz`, fetches `dependencies` and `devDependencies` into `vendors/`, creates a `vendors/<package-name>` link for the current package, and runs dependency build steps when a dependency is newly downloaded.

Use `--manifest` to fetch from another manifest path:

```zsh
buzz fetch --manifest path/to/manifest.buzz
```

After fetching, scripts can import package files with `pkg:<name>/path/to/<script>`:

```buzz
import "pkg:logger/logger.buzz";
```

The path after the package name is resolved inside the dependency's `src` directory.

## manifest.lock.buzz

`manifest.lock.buzz` records the exact dependency sources fetched by `buzz fetch`:

```buzz
.{
    dependencies = {
        "logger": .{
            url = "https://github.com/example/logger.git",
            ref = "v1.2.0",
            hash = "6c8f...",
        },
    },
    devDependencies = {},
}
```

The lock file stores resolved refs and content hashes so later fetches can reuse the same dependency sources and detect drift between `manifest.buzz` and the locked result.
