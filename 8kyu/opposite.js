// ❓Description
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// ✅ Solution
function opposite(num) {
  return num === 0 ? 0 : -num
}
console.log(opposite(0)) // 0
console.log(opposite(8)) //-8
console.log(opposite(-5)) //5
