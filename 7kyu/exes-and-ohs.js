// ❓DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// ✅ Solution мое решение

function XO(string) {
  let str = string.toLowerCase()
  let x = [...str].filter((el) => el === 'x')
  let o = [...str].filter((el) => el === 'o')
  return x.length === o.length ? true : false
}

console.log(XO('xOXXoo')) // true
console.log(XO('OOxoXo')) //false
console.log(XO('ooXxs')) //true
console.log(XO('wwxX')) // false

// ✅ Solution 2 с помощью регулярных выражений:
function XO2(str) {
  //   let x = str.match(/x/gi)
  //   let o = str.match(/o/gi)
  let x = str.match(new RegExp('x', 'gi'))
  let o = str.match(new RegExp('o', 'gi'))
  return (x && x.length) === (o && o.length)
}

console.log(XO2('wwxX')) //false
