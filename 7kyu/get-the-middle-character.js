// ❓DESCRIPTION:
// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even,
//  return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// ✅ Solution1:(моё решение):

function getMiddle(s) {
  let arr = [...s]
  return arr.length % 2 === 0
    ? arr[arr.length / 2 - 1] + arr[arr.length / 2]
    : arr[Math.ceil(arr.length / 2) - 1]
}

console.log(getMiddle('dfghjwgtyui')) // w
console.log(getMiddle('fghjklfghjkk')) // lf
