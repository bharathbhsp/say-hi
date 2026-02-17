# Usage

## Running the CLI

- **Global install**: `npm install -g say-hi` then run `say-hi`.
- **npx**: `npx say-hi` (no install).
- **From repo**: `node bin/say-hi.js` or `npm start`.

## Options

- **`--seed <number>`**  
  Use a fixed seed so the same number always produces the same greeting. Useful for tests or demos.  
  Example: `say-hi --seed 123`

## Customizing greetings

The list of phrases lives in **`data/phrases.json`**: a JSON array of strings. Add, remove, or edit entries; the CLI loads this file at runtime and picks one entry at random (or deterministically when `--seed` is set).

## Behavior

- Prints exactly one line to stdout.
- No config file or environment variables required.
- No network or file writes; read-only use of `data/phrases.json`.
