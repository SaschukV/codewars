// ❓DESCRIPTION:
// Complete the function so that it finds the average of the three scores passed to it and
// returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100.
// Theres is no need to check for negative values or values greater than 100.

// ✅ Solution1:(моё решение)
function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3
  return score >= 90 && score <= 100
    ? 'A'
    : score >= 80 && score < 90
    ? 'B'
    : score >= 70 && score < 80
    ? 'C'
    : score >= 60 && score < 70
    ? 'D'
    : score >= 0 && score < 60
    ? 'F'
    : ''
}
console.log(getGrade(1, 2, 3)) // 'F'
