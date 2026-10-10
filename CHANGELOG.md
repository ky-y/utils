# @ky-y./utils

## 0.1.0

### Minor Changes

- [#189](https://github.com/ky-y/utils/pull/189) [`545934b`](https://github.com/ky-y/utils/commit/545934bf1b205bba4f1555316aa2b3afcb5c8cd9) Thanks [@kyoya0819](https://github.com/kyoya0819)! - Update dependencies, and fix `Crypto` in the published build.
  
  **Breaking changes**
  
  - `uuid` is updated from 11 to 14, which is ESM-only and requires Node.js 20 or later. The CommonJS build (`require("@ky-y./utils")`) now needs a Node.js version that can `require()` ES modules (20.19+ or 22.12+).
  
  **Bug fixes**
  
  - `Crypto.encrypt` and `Crypto.decrypt` failed in the published build with `randomBytes is not a function`, because `node:crypto` was replaced with an empty browser stub. It is now imported from Node.js.
  
  **Other changes**
  
  - The unused `ajv` peer dependency is removed.
  - `isNumber` now parses with radix 10, so strings such as `"0x"` return `true`.
  - The package now contains only `dist`, `README.md`, `LICENSE` and `package.json`.
