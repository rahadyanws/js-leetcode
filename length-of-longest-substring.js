function lengthOfLongestSubstring(s) {
  let map = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    // Jika char sudah ada dan berada di dalam window saat ini
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1;
    }
    
    map.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  
  return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
