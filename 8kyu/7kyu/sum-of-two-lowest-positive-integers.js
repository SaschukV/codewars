// ❓DESCRIPTION:
// Create a function that returns the sum of the two lowest positive numbers
// given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// ✅ Solution 1
function sumTwoSmallestNumbers1(numbers) {
  let num1 = Math.min(...numbers)
  let arr1 = numbers.filter((el) => Math.min(...numbers) !== el)
  let num2 = Math.min(...arr1)

  return num1 + num2
}

console.log(sumTwoSmallestNumbers1([1, 2, 3, 4])) //3

// ✅ Solution 2
function sumTwoSmallestNumbers2(numbers) {
  numbers.sort((a, b) => a - b)
  return numbers[0] + numbers[1]
}

console.log(sumTwoSmallestNumbers2([35, 6, 7, 2])) //8

const sumTwoSmallestNumbers3 = (numbers) =>
  Math.min(...numbers) +
  Math.min(...numbers.filter((el) => Math.min(...numbers) !== el))

console.log(sumTwoSmallestNumbers3([7, 8, 9, 0])) //7
