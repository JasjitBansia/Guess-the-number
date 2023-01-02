const base = document.getElementById("paragraph");
const input = document.getElementById("input");
const button = document.getElementById("guess");
let guess = document.getElementById("counter");

let number = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

button.addEventListener("click", () => {
  if (input.value) {
    if (input.value < number) {
      base.innerHTML = `<b>${input.value}</b> is <b>smaller</b> than the number.`;
      guesses++;
      guess.innerText = `Guess Counter: ${guesses}`;
    } else if (input.value > number) {
      base.innerHTML = `<b>${input.value}</b> is <b>bigger</b> than the number.`;
      guesses++;
      guess.innerText = `Guess Counter: ${guesses}`;
    } else {
      base.innerText = `GG! You guessed the number in ${guesses} tries!`;
      guesses = 0;
      guess.innerText = `Guess counter: ${guesses}`;
      number = Math.floor(Math.random() * 100) + 1;
    }
    input.value = null;
  }
});
