// ❓DESCRIPTION:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"

// ✅ Solution:

function areYouPlayingBanjo(name) {
  return name[0].toUpperCase() === 'R'
    ? name + ' plays banjo'
    : name + ' does not play banjo'
}
console.log(areYouPlayingBanjo('Roman')) // Roman plays banjo
console.log(areYouPlayingBanjo('Vova')) //Vova does not play banjo
