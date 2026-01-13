function flattenArray(arr) {
  const result = [];
  
  function flatten(item) {
    if (Array.isArray(item)) {
      item.forEach(flatten);
    } else {
      result.push(item);
    }
  }
  
  flatten(arr);
  return result;
}

// Alternatif iterative
function flattenArrayIterative(arr) {
  const stack = [...arr];
  const result = [];
  
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.unshift(next);
    }
  }
  
  return result;
}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
console.log(flattenArrayIterative([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
