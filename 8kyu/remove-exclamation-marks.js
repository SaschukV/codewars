// ❓DESCRIPTION:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// ✅ Solution
function removeExclamationMarks(s) {
  let arr = [...s]
  return arr.filter((el) => el !== '!').join('')
}

console.log(removeExclamationMarks('!a!  !b!!!,     !c!!!!!!d,,,,...')) // a b     cd,,,,...
