// ❓DESCRIPTION:
// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

// ✅ Solution1:(моё решение)
function booleanToString(b) {
  return String(b)
}
console.log(booleanToString(1 > 0)) // 'true'
console.log(booleanToString(1 < 0)) // 'false'

// ✅ Solution2:
function booleanToString2(b) {
  return `${b}`
}

console.log(booleanToString2(1 > 0)) // 'true'
console.log(booleanToString2(1 < 0)) // 'false'
