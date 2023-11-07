// ❓ Description
//Давайте играть! Вы должны вернуть, какой игрок выиграл! В случае ничьи возврат Draw!.
//"scissors", "paper" --> "Player 1 won!"
//"scissors", "rock" --> "Player 2 won!"
//"paper", "paper" --> "Draw!"

// ✅ Solution
const rps = (pl1, pl2) => {
  if (
    (pl1 === 'scissors' && pl2 === 'paper') ||
    (pl1 === 'paper' && pl2 === 'rock') ||
    (pl1 === 'rock' && pl2 === 'scissors')
  ) {
    return 'Player 1 won!'
  }
  if (
    (pl2 === 'scissors' && pl1 === 'paper') ||
    (pl2 === 'paper' && pl1 === 'rock') ||
    (pl2 === 'rock' && pl1 === 'scissors')
  ) {
    return 'Player 2 won!'
  }
  if (
    (pl1 === 'paper' && pl2 === 'paper') ||
    (pl1 === 'rock' && pl2 === 'rock') ||
    (pl1 === 'scissors' && pl2 === 'scissors')
  ) {
    return 'Draw!'
  }
}
console.log(rps('paper', 'rock')) //Player 1 won!
