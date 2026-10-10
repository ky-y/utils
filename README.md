# @ky-y./utils

## Overview

This project is inspired by [@antfu/utils](https://github.com/antfu/utils).

## Dependencies

- uuid ... [GitHub](https://github.com/uuidjs/uuid) / [npm.js](https://www.npmjs.com/package/uuid)
- fast-sort ... [GitHub](https://github.com/snovakovic/fast-sort) / [npm.js](https://www.npmjs.com/package/fast-sort)

## Releasing

Releases are automated with [Changesets](https://changesets.dev).

1. In a PR that changes the published package, run `pnpm changeset` and describe the change. Use `patch` for fixes, and `minor` for new features or breaking changes while the version is `0.x`.
2. When the PR is merged, a `chore: release` PR is opened (and kept up to date) with the version bump and `CHANGELOG.md`.
3. Merging that PR publishes the package to npm via Trusted Publishing, then creates the git tag and the GitHub Release.
