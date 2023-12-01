// ❓DESCRIPTION:
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
// Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

// ✅ Solution1:(моё решение)
function rentalCarCost(d) {
  return d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40
}
console.log(rentalCarCost(8)) // 270
console.log(rentalCarCost(2)) // 80
console.log(rentalCarCost(5)) // 180

// ✅ Solution2:

function rentalCarCost2(d) {
  return d * 40 - (d > 6 ? 50 : d > 2 ? 20 : 0)
}
console.log(rentalCarCost2(8)) //270
console.log(rentalCarCost2(2)) //80
console.log(rentalCarCost2(5)) // 180
