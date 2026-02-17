/**
 * Seeded RNG (mulberry32) for reproducible picks when --seed is used.
 * @param {number} seed
 * @returns {() => number} Function that returns 0..1
 */
function createSeededRandom(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Pick one item from an array at random.
 * @param {string[]} list - Non-empty array of strings
 * @param {number|undefined} seed - Optional seed for reproducible result
 * @returns {string}
 */
export function pickOne(list, seed) {
  if (!list || list.length === 0) throw new Error("list must be non-empty");
  const random = seed !== undefined ? createSeededRandom(seed) : () => Math.random();
  const index = Math.floor(random() * list.length);
  return list[index];
}
