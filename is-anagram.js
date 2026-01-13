function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"));  // true
console.log(isAnagram("rat", "car"));          // false
console.log(isAnagram("silent", "listen"));    // true
console.log(isAnagram("hello", "world"));      // false
console.log(isAnagram("", ""));                // true
console.log(isAnagram("a", "a"));              // true
console.log(isAnagram("rat", "tar"));          // true