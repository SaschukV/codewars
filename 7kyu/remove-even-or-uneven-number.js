// ❓DESCRIPTION:
// Создайте функции ,которые принимают двухмерный массив чисел и удаляет
// из него нечетные числа либо четные числа

// ✅ Solution1:(моё решение)
function removeEvenNumber(arr) {
  let a = []
  for (let i = 0; i < arr.length; i++) {
    a.push(arr[i].filter((el) => el % 2 !== 0))
  }
  return a
}

console.log(
  removeEvenNumber([
    [1, 2, 3, 4, 5],
    [13, 45, 6, 7, 8, 14],
    [3, 4, 7, 8, 22],
  ])
) // [[1,3,5],[13,45,7],[3,7]]

function removeUnEvenNumber(arr) {
  let a = []
  for (let i = 0; i < arr.length; i++) {
    a.push(arr[i].filter((el) => el % 2 === 0))
  }
  return a
}

console.log(
  removeUnEvenNumber([
    [1, 2, 3, 4, 5],
    [13, 45, 6, 7, 8, 14],
    [3, 4, 7, 8, 22],
  ])
) // [[2,4],[6,8,14],[4,8,22]]
