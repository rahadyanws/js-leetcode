function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    let val = '';
    if (i % 3 === 0) val += 'Fizz';
    if (i % 5 === 0) val += 'Buzz';
    result.push(val || i);
  }
  return result;
}

console.log(fizzBuzz(15));