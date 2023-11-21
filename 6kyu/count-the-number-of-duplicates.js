// ❓DESCRIPTION:
// Write a function that will return the count of distinct case-insensitive alphabetic characters
// and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets (both uppercase and lowercase)
//  and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// ✅ Solution1:(моё решение)
function duplicateCount(text) {
  let obj = text
    .toUpperCase()
    .split('')
    .reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1
      return acc
    }, {})

  for (key in obj) {
    if (obj[key] === 1) {
      delete obj[key]
    }
  }
  let count = 0
  for (let key in obj) {
    count++
  }
  return count
}

console.log(duplicateCount('abracadabra89900')) // 5

// ✅ Solution2:

function duplicateCount2(text) {
  return [...text.toUpperCase()].filter((val, i, arr) => {
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i
  }).length
}

console.log(duplicateCount2('Indivisibilities')) //2

// ✅ Solution3:

function duplicateCount3(text) {
  return text
    .toLowerCase()
    .split('')
    .filter(function (val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i
    }).length
}
console.log(duplicateCount3('Indivisibilities')) //2
