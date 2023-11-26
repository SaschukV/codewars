// ❓DESCRIPTION:
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// ✅ Solution1:(моё решение)

function bmi(weight, height) {
  let bmi = weight / height ** 2
  if (bmi <= 18.5) return 'Underweight'
  if (bmi > 18.5 && bmi <= 25) return 'Normal'
  if (bmi > 25 && bmi <= 30) return 'Overweight'
  if (bmi > 30) return 'Obese'
}

console.log(bmi(80, 1.8)) // 'Normal'

// ✅ Solution2:
const bmi2 = (w, h, bmi = w / h / h) =>
  bmi <= 18.5
    ? 'Underweight'
    : bmi <= 25
    ? 'Normal'
    : bmi <= 30
    ? 'Overweight'
    : 'Obese'
console.log(bmi2(80, 1.8)) // 'Normal'
