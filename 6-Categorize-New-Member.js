// Tantangan koding codewars

// Reverse words

// 1. Cara bar bar

// function openOrSenior(data) {
//   return data.map((member) => {
//     const [age, handicap] = member;

//     // Check if the member is at least 55 years old and has a handicap greater than 7
//     if (age >= 55 && handicap > 7) {
//       return "Senior";
//     } else {
//       return "Open";
//     }
//   });
// }

// 2. Cara simple

const openOrSenior = (data) =>
  data.map((member) => (member[0] >= 55 && member[1] > 7 ? "Senior" : "Open"));

console.log(
  openOrSenior([
    [12, 5],
    [70, 8],
    [80, 9],
  ])
);
