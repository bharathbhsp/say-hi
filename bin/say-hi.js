#!/usr/bin/env node

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { pickOne } from "../lib/random-pick.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const phrasesPath = join(__dirname, "..", "data", "phrases.json");

function loadPhrases() {
  const raw = readFileSync(phrasesPath, "utf-8");
  const list = JSON.parse(raw);
  if (!Array.isArray(list) || list.length === 0) throw new Error("phrases.json must be a non-empty array");
  return list;
}

function parseArgs() {
  const args = process.argv.slice(2);
  let seed;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--seed" && args[i + 1] !== undefined) {
      seed = parseInt(args[i + 1], 10);
      if (Number.isNaN(seed)) seed = undefined;
      break;
    }
  }
  return { seed };
}

function main() {
  const phrases = loadPhrases();
  const { seed } = parseArgs();
  const text = pickOne(phrases, seed);
  console.log(text);
}

main();
