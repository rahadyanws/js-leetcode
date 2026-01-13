function flat(arr, n) {
  if (n === 0) return arr;
  const res = [];

  for (let val of arr) {
    if (Array.isArray(val) && n > 0) {
      res.push(...flat(val, n - 1));
    } else {
      res.push(val);
    }
  }
  return res;
}

console.log(flat([1, 2, 3], 1));                    
// → [1, 2, 3]

console.log(flat([1, [2, 3], 4], 1));              
// → [1, 2, 3, 4]

console.log(flat([1, [2, [3, 4]], 5], 1));         
// → [1, 2, [3, 4], 5]

console.log(flat([1, [2, [3, [4, 5]]]], 2));       
// → [1, 2, 3, [4, 5]]

console.log(flat([1, [2, [3, [4, [5, 6]]]]], 3));  
// → [1, 2, 3, 4, 5, 6]

console.log(flat([[[[1]]]], 10));                   
// → [1]

console.log(flat([1, 2, [3]], 0));                  
// → [1, 2, [3]]   (karena n=0 langsung return array asli)

console.log(flat([], 5));                           
// → []

console.log(flat([1, "hello", [true, [null]]], 2)); 
// → [1, "hello", true, null]