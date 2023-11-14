// ❓DESCRIPTION:
//We need a function that can transform a string into a number.

// ✅ Solution1:(моё решение)

const stringToNumber = function (str) {
  return +str
}

console.log(stringToNumber('55')) // 55

// ✅ Solution2:
const stringToNumber2 = function (str) {
  return Number(str)
}
console.log(stringToNumber2('99')) //99
