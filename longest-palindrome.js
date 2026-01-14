function longestPalindrome(s) {
  let maxStr = "";

  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // Kembalikan substring valid (koreksi indeks setelah loop break)
    return s.slice(left + 1, right);
  };

  for (let i = 0; i < s.length; i++) {
    const odd = expand(i, i);     // Palindrom ganjil (pusat 1 huruf)
    const even = expand(i, i + 1); // Palindrom genap (pusat di antara huruf)

    if (odd.length > maxStr.length) maxStr = odd;
    if (even.length > maxStr.length) maxStr = even;
  }

  return maxStr;
}

console.log(longestPalindrome("babad"));