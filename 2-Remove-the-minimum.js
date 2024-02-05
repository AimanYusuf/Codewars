// Tantangan koding codewars

// Remove the minimum

// 1. Cara bar bar

// function removeSmallest(numbers) {
//   if (numbers.length === 0) {
//     return [];
//   }

//   // Find the index of the smallest element
//   const minIndex = numbers.indexOf(Math.min(...numbers));

//   // Create a new array without the smallest element
//   const result = numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1));

//   return result;
// }

// 2. Cara simple
// const removeSmallest = (numbers) =>
//   numbers.length === 0
//     ? []
//     : numbers
//         .slice(0, numbers.indexOf(Math.min(...numbers)))
//         .concat(numbers.slice(numbers.indexOf(Math.min(...numbers)) + 1));

// 3. Cara terbaik

const removeSmallest = (numbers) =>
  numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));

console.log(removeSmallest([5, 2, 3, 1, 9, 1]));
console.log(removeSmallest([1, 2, 3, 4, 5, 6]));
