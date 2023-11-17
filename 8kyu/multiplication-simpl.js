// ❓DESCRIPTION:

//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise

// ✅ Solution1:(моё решение)

const simpleMultiplication = (number) =>
  number % 2 === 0 ? number * 8 : number * 9

console.log(simpleMultiplication(4)) // 32
console.log(simpleMultiplication(9)) // 81
