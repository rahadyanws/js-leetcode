function removeDuplicatesUnsortedArr(arr) {
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    
    // Cari elemen di result array
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        found = true;
        break;
      }
    }
    
    if (!found) {
      result.push(arr[i]);
    }
  }
  
  return result;
}

console.log(removeDuplicatesUnsortedArr([1, 2, 3, 2, 4, 1, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicatesUnsortedArr([1, 2, 1])); // [1, 2]
console.log(removeDuplicatesUnsortedArr([5, 0, 1, 6, 1, 2, 2, 3, 3, 4])); // [0, 1, 2, 3, 4]
