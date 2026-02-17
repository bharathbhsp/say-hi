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

---

## Troubleshooting

| Error | Cause | Fix |
| ----- | ----- | --- |
| **ENEEDAUTH** / **401** | Not logged in | Run `npm login` and enter your npm credentials. |
| **E403** (Forbidden) | Package name `say-hi` is already taken, or you don't have permission to publish it | Use a **scoped** name: in `package.json` set `"name": "@YOUR_NPM_USERNAME/say-hi"`, then run `npm publish --access public`. |
| **402 Payment Required** | npm may require a paid plan for some new unscoped names | Use a scoped package: `"name": "@YOUR_NPM_USERNAME/say-hi"` and `npm publish --access public`. |
| **OTP required** / 2FA | Two-factor auth is enabled on your account | When `npm publish` prompts for a one-time password, enter the code from your authenticator app. |
| **npm ERR!** about **bin** or **repository** | package.json format | Run `npm pkg fix` in the project root to apply npm's suggested fixes, then try again. |

**Recommended if `say-hi` is taken or 402/403:** Use a scoped name so you always have publish rights:

1. In `package.json`: `"name": "@bharathbhsp/say-hi"` (replace with your npm username).
2. Run: `npm publish --access public`
3. Users install with: `npm install -g @bharathbhsp/say-hi` or `npx @bharathbhsp/say-hi`
