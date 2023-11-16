// ❓DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
//  Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// ✅ Solution1:(моё решение)
function isIsogram(str) {
  return [...new Set(str.toUpperCase())].length === str.length
}

console.log(isIsogram('AsdGhjk')) // true
console.log(isIsogram('AAbklpo')) //false

// ✅ Solution2:
function isIsogram2(str) {
  return new Set(str.toUpperCase()).size === str.length
}

console.log(isIsogram2('AsdGhjk'))
console.log(isIsogram2('AAbklpo'))
