let word = words[Math.floor(Math.random() * words.length)]; // chooses a random word from the array
let wordLength = word.length // lets the # of guesses be proportionate to the length of the word
let lives = word.length + 5
let remainingLetters = wordLength // sets the amount of letters to be guessed
let answers = [''] // checks for what's been already guessed
let isPresent = false

console.log(word)
console.log(wordLength)

document.write('<br> <br> <br> <h3 id="header"> welcome to hangman! </h3>')
document.write(`<text id="counter"> guesses left: ${lives} </text>`)
document.write('<br> <br> YOUR WORD: <br>') // styling

document.getElementById("header").style.backgroundColor = "#b2dd7e"
document.getElementById("counter").style.color = "#6b8052" // more styling

for (let i = 0; i < wordLength; i++) {
  answers[i] = "_"
  document.write(`<text id="l${i}"> _ </text>`) // sets the dashes for the word
}

function conditions() {
  if (remainingLetters <= 0) {
    document.getElementById("counter").textContent = `you win! (: would you like to play again?`
  } else {
    switch (lives) {
      case 6:
        document.getElementById("flick").src = "2.png"
        break;
      case 5:
        document.getElementById("flick").src = "3.png"
        break;
      case 4:
        document.getElementById("flick").src = "4.png"
        break;
      case 3:
        document.getElementById("flick").src = "5.png"
        break;
      case 2:
        document.getElementById("flick").src = "6.png"
        break;
      case 1:
        document.getElementById("flick").src = "7.png"
        break;
      case 0:
        document.getElementById("flick").src = "8.png"
        document.getElementById("counter").textContent = `game over! ): would you like to play again? your word was: '${word}'`
    }
  }
} // checks if win/loss conditions are met and responds accordingly

function guess() { // game loop
  if (remainingLetters > 0 || lives > 0) {
    let guess = prompt('guess a letter! (only enter one at a time)') // asks for a guess
    if (guess === null) {
      alert('please enter a guess! try again') // makes sure a guess is being entered
    } else if (guess.length !== 1) {
      alert('please only enter one letter at a time! try again') // only allows one letter guesses
    } else if (/[a-zA-Z]/.test(guess) === false) {
      alert('please enter a letter! try again')
    } else {
      let matchstring = false
      for (let x = 0; x < word.length; x++) {
        if (word[x] === guess) {
          answers[x] = guess; // sets dashes to reflect letters
          document.getElementById(`l${x}`).textContent = `${guess}`
          matchstring = true
          remainingLetters--
          conditions()
        }
      }
      if (matchstring === false) {
        lives--
        document.getElementById(`counter`).textContent = `guesses left: ${lives}`
        conditions()
      }
    }
  }
}
