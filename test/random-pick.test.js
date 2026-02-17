import { pickOne } from "../lib/random-pick.js";

const phrases = ["Hi!", "Hey!", "Hello!"];

// Same seed => same result
const a = pickOne(phrases, 42);
const b = pickOne(phrases, 42);
if (a !== b) throw new Error(`Expected same result for seed 42, got "${a}" and "${b}"`);
if (!phrases.includes(a)) throw new Error(`Result "${a}" not in phrases`);

// Different seed can give different result (not guaranteed but we can check it's valid)
const c = pickOne(phrases, 99);
if (!phrases.includes(c)) throw new Error(`Result "${c}" not in phrases`);

// No seed => valid result (we can only check it's from list)
const d = pickOne(phrases);
if (!phrases.includes(d)) throw new Error(`Result "${d}" not in phrases`);

// Empty list throws
let threw = false;
try {
  pickOne([], 1);
} catch (e) {
  threw = true;
}
if (!threw) throw new Error("Expected pickOne([], 1) to throw");

console.log("All tests passed.");
