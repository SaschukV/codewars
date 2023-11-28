// ❓DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// ✅ Solution1:(моё решение)
function findShort(s) {
  let arr = s.split(' ')
  let ar = []
  for (let key of arr) {
    ar.push(key.length)
  }
  return Math.min(...ar)
}

console.log(findShort('The tree names famaly kgkgkgkkjk')) // 3
