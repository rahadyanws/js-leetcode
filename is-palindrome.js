function isPalindrome(x) {
  if (x < 0) return false;
  if (x < 10) return true;
  
  let reversed = 0;
  let temp = x;

  while (temp > 0) {
    const digit = temp % 10;
    reversed = (reversed * 10) + digit;
    temp = Math.floor(temp / 10);
  }

  return reversed === x;
}

console.log(isPalindrome(121));