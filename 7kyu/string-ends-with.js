// ❓DESCRIPTION:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// ✅ Solution1:(моё решение)
function solution(str, ending) {
  return str.slice(-ending.length) === ending || ending === ''
}

console.log(solution('asdfghk', 'ghk')) // true
console.log(solution('asdfghk', 'yhk')) // false
console.log(solution('asdfghk', '')) // true

// ✅ Solution2:

function solution2(str, ending) {
  return str.endsWith(ending)
}

console.log(solution2('asdfghk', 'ghk')) // true
console.log(solution2('asdfghk', 'yhk')) // false
console.log(solution2('asdfghk', '')) // true
