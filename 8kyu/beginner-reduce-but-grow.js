// ❓DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order.
// Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// ✅ Solution1:(моё решение)
function grow(x) {
  return x.reduce(function (acc, currVal) {
    return acc * currVal
  })
}

console.log(grow([1, 2, 3, 4])) //24
