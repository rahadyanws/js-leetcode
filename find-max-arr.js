function findMaxArr(arr) {
  if (arr.length === 0) return null;
  
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMaxArr([4, 7, 13, 2, 9, 1])); // 9
console.log(findMaxArr([])); // null
console.log(findMaxArr([5])); // 5
