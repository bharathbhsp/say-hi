# say-hi

CLI that prints a random "say hi" greeting. No config, no network — just run and get a friendly line.

## Install

```bash
npm install -g say-hi
```

Or run without installing:

```bash
npx say-hi
```

From this repo:

```bash
node bin/say-hi.js
# or
npm start
```

## Usage

```bash
say-hi              # print one random greeting
say-hi --seed 42    # same seed => same output (reproducible)
```

## Options

| Option     | Description |
| ---------- | ----------- |
| `--seed N` | Use integer seed for reproducible output (e.g. tests, demos). |

## Adding phrases

Edit `data/phrases.json`: it’s a JSON array of strings. Add or remove entries; the CLI picks one at random each run.

## Tests

```bash
npm test
```

Uses a fixed seed to assert deterministic behavior and valid picks.

## Documentation

- **[Approach & design](docs/APPROACH.md)** — Goal, scope, and design (no code).
- **[Usage](docs/USAGE.md)** — Install, options, and customization.

## License

MIT
