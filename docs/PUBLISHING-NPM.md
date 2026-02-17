# Publishing to npm

## Prerequisites

1. **npm account** — [Sign up](https://www.npmjs.com/signup) if you don’t have one.
2. **Logged in locally** — From the project root:
   ```bash
   npm login
   ```
   Enter your npm username, password, and email (or use a token).

## Before publishing

1. **Bump version** (when you have changes to release):
   ```bash
   npm version patch   # 1.0.0 → 1.0.1
   npm version minor   # 1.0.0 → 1.1.0
   npm version major   # 1.0.0 → 2.0.0
   ```
2. **Check what will be published** (only `bin`, `lib`, and `data` are included via the `files` field):
   ```bash
   npm pack --dry-run
   ```
3. **Run tests**:
   ```bash
   npm test
   ```

## Publish

```bash
npm publish
```

- First time: publishes the package to the registry. The name `say-hi` must be **available** on npm. If it’s taken, use a **scoped** name in `package.json`, e.g. `"name": "@bharathbhsp/say-hi"`, then publish with:
  ```bash
  npm publish --access public
  ```
  (Scoped packages are private by default; `--access public` makes it installable by everyone.)

## After publishing

- Install globally: `npm install -g say-hi` (or `@bharathbhsp/say-hi` if scoped).
- Run without installing: `npx say-hi`.

## Updating the package

1. Make your changes and run tests.
2. Bump version: `npm version patch` (or minor/major).
3. Publish: `npm publish`.
4. Push the version tag: `git push && git push --tags`.

## Optional: 2FA

For extra security, enable two-factor auth on npm (npm website → Account → “Enable 2FA”). You’ll use a one-time password or `npm login` with a token when publishing.
