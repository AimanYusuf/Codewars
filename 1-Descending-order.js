// Tantangan koding codewars

// 1 Descending Order

// 1. Cara bar bar

// function descendingOrder(n) {
//   let digits = Array.from(String(n), Number).parseInt();

//   // Sort the digits in descending order
//   let sortedDigits = digits.sort((a, b) => b - a);

//   // Join the sorted digits to form the final number
//   let result = parseInt(sortedDigits.join(""));

//   return console.log(result);
// }

// 2. Cara singkat

const descendingOrder = (n) =>
  parseInt(
    Array.from(String(n))
      .sort((a, b) => b - a)
      .join("")
  );

console.log(descendingOrder(120846013));
