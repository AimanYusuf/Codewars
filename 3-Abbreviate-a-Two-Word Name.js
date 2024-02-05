// Tantangan koding codewars

// Abbreviate a Two Word Name

// 1. Cara bar bar

// function abbrevName(name) {
//   return name
//     .split(" ")
//     .map((n) => n[0].toUpperCase())
//     .join(".");
// }

// 2. Cara simple

const abbrevName = (name) =>
  name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .join(".");

console.log(abbrevName("Joko susilo"));
