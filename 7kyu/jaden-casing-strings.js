// ❓DESCRIPTION:
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
//  Jaden is also known for some of his philosophy that he delivers via Twitter.
//  When writing on Twitter, he is known for almost always capitalizing every word.
//  For simplicity, you'll have to capitalize each word, check out how contractions are
//  expected to be in the example below.

// // Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way
//  he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// ✅ Solution1:(моё решение)
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((el) => {
      return [...el]
        .map((el, index) => {
          return index === 0 ? el.toUpperCase() : el
        })
        .join('')
    })
    .join(' ')
}

console.log("I'm vova pety sasha".toJadenCase()) // I'm Vova Pety Sasha

// ✅ Solution2:
String.prototype.toJadenCase2 = function () {
  return this.split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ')
}

console.log("I'm vova pety sasha".toJadenCase2()) //  I'm Vova Pety Sasha
