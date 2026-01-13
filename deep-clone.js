function deepClone(obj, visited = new WeakMap()) {
  // Handle primitives and null
  if (obj === null || typeof obj !== 'object') return obj;
  
  // Handle circular references
  if (visited.has(obj)) return visited.get(obj);
  
  // Handle Date
  if (obj instanceof Date) return new Date(obj);
  
  // Handle Array
  if (Array.isArray(obj)) {
    const clonedArray = [];
    visited.set(obj, clonedArray);
    obj.forEach((item, index) => {
      clonedArray[index] = deepClone(item, visited);
    });
    return clonedArray;
  }
  
  // Handle Object
  const clonedObj = {};
  visited.set(obj, clonedObj);
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key], visited);
    }
  }
  
  return clonedObj;
}

console.log(deepClone({ a: 1, b: { c: 2 } }));
console.log(deepClone([1, 2, { a: 3 }]))

const original = {
  name: "John",
  details: {
    age: 30,
    hobbies: ["reading", "coding"]
  },
  date: new Date()
};

const cloned = deepClone(original);
console.log(cloned.details !== original.details); // true
console.log(cloned.date instanceof Date); // true
