// ❓ Description
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// ✅ Solution 1
function maxMin(list) {
  const max = Math.max(...list)
  const min = Math.min(...list)
  return `max=${max},min=${min}`
}
console.log(maxMin([1, 0, -90, 7, 32, 56, -3])) // max=56,min=-90

// ✅ Solution 2

const max = (list) => Math.max(...list)
const min = (list) => Math.min(...list)

console.log(
  'max=',
  max([1, 0, -87, 69, 40, 4, -8]),
  ',',
  'min=',
  min([1, 0, -87, 69, 40, 4, -8])
) // max=69 ,min=-87
