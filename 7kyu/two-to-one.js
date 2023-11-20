// ❓DESCRIPTION:

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// ✅ Solution1:(моё решение)
function twoToOne(s1, s2) {
  let arr = [...s1, ...s2]
  let arr1 = arr.sort(function (a, b) {
    if (a > b) {
      return 1
    }
    if (a < b) {
      return -1
    }
    if (a === b) {
      return 0
    }
  })
  let j = arr1.length - 1
  for (let i = 0; i <= j; i++) {
    if (arr1[i] === arr1[i + 1]) {
      delete arr1[i]
    }
  }
  return arr1.filter((el) => el !== undefined).join('')
}
console.log(twoToOne('kkkop', 'abbbsfzaab')) //  abfkopsz
console.log(twoToOne('kkkkww', 'abbbsfzzzz')) //  abfksz

// ✅ Solution2:
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')
//console.log(twoToOne('kkkop', 'abbbsfz')) //  abfkopsz
