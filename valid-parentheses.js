function isValidParentheses(s) {
  const stack = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let char of s) {
    if (map[char]) {
      // Jika kurung buka, push pasangannya ke stack
      stack.push(map[char]);
    } else {
      // Jika kurung tutup, pop stack dan cek kecocokan
      if (stack.pop() !== char) return false;
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses("()"));
console.log(isValidParentheses("()[]{}"));
console.log(isValidParentheses("(]"));
console.log(isValidParentheses("([)]"));
console.log(isValidParentheses("{[]}"));
