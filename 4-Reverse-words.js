// Tantangan koding codewars

// Reverse words

// 1. Cara bar bar

// function reverseWords(str) {
//   // Split the string into an array of words
//   var words = str.split(" ");

//   // Reverse each word in the array
//   var reversedWords = words.map(function (word) {
//     return word.split("").reverse().join("");
//   });

//   // Join the reversed words back into a string
//   var result = reversedWords.join(" ");

//   return result;
// }

// 2. cara simple

// const reverseWords = (str) =>
//   str
//     .split(" ")
//     .map((s) => s.split("").reverse().join(""))
//     .join(" ");

// 3. Cara dari para pengguna lain

var reverseWords = (s) => s.replace(/\S+/g, (v) => [...v].reverse().join``);

console.log(reverseWords("double  spaced  wordsecil"));
