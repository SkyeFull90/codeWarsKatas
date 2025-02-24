function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("Input must be between 0 and 12");
  } else if (n === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
​
// Example usage
try {
  console.log(factorial(5)); // Output: 120
  console.log(factorial(0)); // Output: 1
  console.log(factorial(13)); // Raises RangeError
} catch (e) {
  console.error("Error:", e.message);
}
​