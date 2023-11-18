// ❓DESCRIPTION:
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// ✅ Solution1:(моё решение)

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0]
  }
}
let obj = new SmallestIntegerFinder()

console.log(obj.findSmallestInt([1, 2, 3, 0])) // 0

// ✅ Solution2:
class SmallestIntegerFinder2 {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
let obj2 = new SmallestIntegerFinder2()

console.log(obj2.findSmallestInt([-1, 3, 0, 45, -90, 78])) //-90

// ✅ Solution3:
class SmallestIntegerFinder3 {
  findSmallestInt(args) {
    return Math.min.apply(null, args)
  }
}
let obj3 = new SmallestIntegerFinder3()

console.log(obj3.findSmallestInt([-1, 3, 0, 45, -90, 78, 34, -99])) //-99
