// Callback and arrow function introduction in array

// Method 1
var isEven = (element) => {
  if (element % 2 === 0) {
    return true;
  }
  return false;
};

console.log(isEven(2));

// Method 2
var result = [2, 4, 6, 8].every(isEven);
console.log(result);

// Method 3
var result = [2, 4, 6, 8].every((e) => e % 2 === 0);
console.log(result);
