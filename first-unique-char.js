function firstUniqueChar(s) {
  const map = {};

  for (const c of s) map[c] = (map[c] || 0) + 1;
  for (const c of s) {
    if (map[c] === 1) return c;
  }
  return null;
}

console.log(firstUniqueChar("leetcode"));
