// ❓DESCRIPTION:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and
// the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// ✅ Solution1:(моё решение)
function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return []
  }
  let countPositive = 0
  let sumNegative = 0
  input.forEach((el) => {
    if (el > 0) {
      countPositive += 1
    }
    if (el < 0) {
      sumNegative += el
    }
  })
  return [countPositive, sumNegative]
}
console.log(countPositivesSumNegatives([])) // []
console.log(countPositivesSumNegatives(null)) // []
console.log(countPositivesSumNegatives([-12, 32, 0, 0, 1])) // [2,-12]
