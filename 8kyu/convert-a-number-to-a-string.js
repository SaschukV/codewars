// ❓DESCRIPTION:
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// ✅ Solution1:(моё решение)

function numberToString1(num) {
  return String(num)
}
console.log(numberToString1(555)) // '555'

// ✅ Solution1:(моё решение)

function numberToString2(num) {
  return num.toString()
}

console.log(numberToString2(555)) // '555'
