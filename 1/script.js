let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);

let guessNumber = Number(prompt('Введи число от 1 до 10'));

console.log(randomNumber === guessNumber);