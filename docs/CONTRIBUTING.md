# Contributing

## Development setup

```bash
git clone https://github.com/bharathbhsp/say-hi.git
cd say-hi
node bin/say-hi.js
npm test
```

## Adding or changing greetings

Edit `data/phrases.json` (JSON array of strings). No code changes required.

## Running tests

```bash
npm test
```

Tests check that `pickOne()` is deterministic with a seed and rejects empty lists.

## Publishing to GitHub

This repo is already on GitHub: **https://github.com/bharathbhsp/say-hi**

To push future changes:

```bash
git add -A
git commit -m "Your message"
git push
```

To create the repo elsewhere or re-push from scratch:

1. Create a new repository on GitHub (no README/license).
2. `git remote add origin https://github.com/YOUR_USER/say-hi.git`
3. `git push -u origin main`
