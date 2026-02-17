# Approach: CLI for Random "Say Hi" Texts

## Goal

Provide a CLI command that, when run, prints a random "say hi"–style greeting or message. The command should be simple to invoke (e.g. `say-hi` or `npx say-hi`) and produce varied, friendly output.

## Scope (this document)

- Describe the approach and design only.
- No implementation in this phase.

---

## 1. What “say hi texts” means

- **Greeting phrases**: e.g. “Hi there!”, “Hey!”, “Hello, friend!”
- **Short friendly messages**: e.g. “Just saying hi 🙂”, “Hope you’re having a good day!”
- **Optional**: tone (casual, formal, funny), language (e.g. English first), and length (short vs. slightly longer).

The CLI will pick one such text at random and print it (e.g. to stdout).

---

## 2. High-level approach

1. **Data source**  
   Maintain a curated list of say-hi texts (e.g. in a JSON/JS module or config file). The CLI will:
   - Load this list at runtime.
   - Select one entry at random (uniform or weighted).
   - Output that text (and optionally format it).

2. **CLI entrypoint**  
   - One main command (e.g. `say-hi` or `hi`) that “generate and print one random say-hi text”.
   - Later, optional subcommands or flags (e.g. `--count 3`, `--lang en`) can be added without changing this core behavior.

3. **Determinism (optional)**  
   - By default: use runtime randomness (different output each run).
   - Optional: support a `--seed` (or similar) for reproducible output when needed (e.g. tests or demos).

4. **No side effects**  
   - No network, no writing files, no config required for basic usage. Just: run → print one line (or a few lines) of text.

---

## 3. Technology options (to decide later)

- **Runtime**: Node.js (simple, good for a small CLI) or another runtime (e.g. Python, Rust) depending on preference and distribution.
- **CLI framework**:  
  - Node: e.g. `commander`, `yargs`, or minimal `process.argv` for a single command.  
  - Others: equivalent minimal CLI parsing.
- **Distribution**:  
  - npm package with a `bin` entry so users can run `npx say-hi` or install globally.  
  - Or standalone binary if we move to a compiled language later.

No code is committed in this step; these are options to choose from when implementing.

---

## 4. Suggested structure (conceptual)

- **Entrypoint**: One script that:
  - Parses CLI args (if any).
  - Loads the list of say-hi texts.
  - Selects one at random.
  - Prints it (and exits).
- **Data**: One place (file or module) that holds the array (or list) of say-hi strings.
- **Random selection**: A small, explicit “pick one” step (e.g. `list[randomIndex]`) so behavior is clear and testable.

Optional later:
- Config file for user-added phrases.
- Localization (multiple languages).
- Flags: `--count`, `--seed`, `--format` (plain vs. with emoji, etc.).

---

## 5. Success criteria (for when we implement)

- Running the CLI prints exactly one random say-hi text by default.
- No input required for basic usage.
- Easy to add or edit phrases by changing the data source only.
- Behavior is simple enough to test (e.g. with a fixed seed or mock RNG).

---

## 6. Out of scope for this doc

- Actual code, file names, or repository layout.
- Package manager choice (npm vs pnpm vs yarn).
- CI/CD, packaging, or publishing.

---

## Next steps

1. Decide runtime and CLI framework.
2. Define the data format and initial set of say-hi texts.
3. Implement the single command: load data → pick one → print.
4. Add tests (e.g. with fixed seed or mocked random).
5. Optionally add flags and distribution (e.g. npm `bin`).
