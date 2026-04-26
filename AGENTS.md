# Agent Instructions

## Project

This repository is the VuePress 2 documentation site for the buzz language.
Most source content lives under `docs/`, with VuePress configuration in
`docs/.vuepress/config.ts`, styles in `docs/.vuepress/styles/index.scss`, and
static assets in `docs/.vuepress/public/`.

Use `pnpm` for Node/VuePress commands because this repo has a `pnpm-lock.yaml`.

## Before Editing

- Run `git status --short` before touching files.
- If the working copy shows staged changes or untracked files, ask the user
  before editing anything.
- If the working copy has only unstaged tracked changes, inspect the relevant
  files first and avoid overwriting unrelated user work.
- Check `git status --short` again after edits.

## buzz Documentation

- When asked to write or change content about buzz syntax, APIs, standard
  library behavior, or runtime behavior, first validate the claim with a small
  temporary buzz program and run it with `buzz`.
- Keep validation programs outside tracked source paths, such as `/tmp`, unless
  the user explicitly asks for a committed example.
- `buzz` is expected to be available on `PATH`. On this machine it currently
  resolves to `/Users/giann/git/buzz/zig-out/bin/buzz`.
- Use existing Markdown style and fenced `buzz` code blocks for examples.
- Keep documentation concise, factual, and example-driven.

## VuePress Docs

- Use `pnpm docs:dev` to preview the site locally.
- Use `pnpm docs:build` to validate changes that affect VuePress config,
  navigation, assets, or rendered page structure.
- When adding, removing, or renaming guide/reference pages, update the sidebar
  in `docs/.vuepress/config.ts`.
- Keep internal links consistent with the existing docs. Where nearby links use
  `.html`, use the same style.

## Generated and Ignored Files

- Prefer editing source Markdown, VuePress config, styles, and public assets.
- Do not edit `node_modules`, `.temp`, or `.cache`.
- Avoid touching `docs/.vuepress/dist` by default. It is generated deployment
  output referenced by `nginx.conf`; only rebuild or commit it when the user
  explicitly asks for generated deployment output.
- Do not run formatters, generators, or build steps that rewrite tracked files
  unless the requested task requires it or the user asks for it.
