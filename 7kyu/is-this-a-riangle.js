// ❓DESCRIPTION:
// Implement a function that accepts 3 integer values a, b, c.
// The function should return true if a triangle can be built with the sides of given length
// and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// ✅ Solution1:(моё решение)

function isTriangle(a, b, c) {
  return a < b + c && b < a + c && c < a + b ? true : false
}

console.log(isTriangle(2, 2, 7)) //false
console.log(isTriangle(2, 2, 1)) //true
