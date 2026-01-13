function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const atIndex = email.indexOf('@');
  const dotIndex = email.lastIndexOf('.');
  
  return (
    atIndex > 0 &&
    dotIndex > atIndex + 1 &&
    dotIndex < email.length - 1 &&
    !email.includes(' ')
  );
}

console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid.email@com")); // false
console.log(isValidEmail("@example.com")); // false
console.log(isValidEmail("test@example")); // false
console.log(isValidEmail("test@example.com ")); // false