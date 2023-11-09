// ❓DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// ✅ Solution

function findAverage(array) {
  if (array.length === 0) {
    return 0
  }
  let sum = 0
  array.forEach((el) => (sum += el))

  return sum / array.length
}

console.log(findAverage([1, 2, 3, 4, 5])) // 3
