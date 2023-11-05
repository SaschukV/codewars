// ❓DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// ✅First Solution
function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0)
}
//✅Second Solution
function positiveSum2(arr) {
  let sum = 0
  arr.forEach((el) => {
    if (el > 0) {
      sum += el
    }
  })
  return sum
}

console.log('positiveSum:', positiveSum([-1, -2, -5, 0, -9, 6, -8])) // 6
console.log('positiveSum2:', positiveSum2([-1, -2, -5, 0, -9, -6, -8])) //0
