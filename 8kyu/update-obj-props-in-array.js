// ❓ Description
//Обновить свойства объекта в массиве:
// arr = [
//     {id:1,name:'Igor',lastName:'Ivanov',age:35},
//     {id:2,name:'Ivan',lastName:'Petrov',age:23},
//     {id:3,name:'Petr',lastName:'Sidorov',age:18},
//     {id:4,name:'Semen',lastName:'Dmitrov',age:19},
//     {id:5,name:'Sergey',lastName:'Baranov',age:27},
// ]

// ✅ Solution
function updateObjectInArray(items, itemId, objPropName, newObjProp) {
  return items.map((el) => {
    if (el[objPropName] === itemId) {
      return { ...el, ...newObjProp }
    }
    return el
  })
}
let arr = [
  { ident: 1, name: 'Igor', lastName: 'Ivanov', age: 35 },
  { ident: 2, name: 'Ivan', lastName: 'Petrov', age: 23 },
  { ident: 3, name: 'Petr', lastName: 'Sidorov', age: 18 },
  { ident: 4, name: 'Semen', lastName: 'Dmitrov', age: 19 },
  { ident: 5, name: 'Sergey', lastName: 'Baranov', age: 27 },
]

console.log(
  'new array:',
  updateObjectInArray(arr, 3, 'ident', {
    name: 'Vasiliy',
    age: 29,
    lastName: 'Semenov',
  })
)
