var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var computerRandom = Math.floor(Math.random() * 101);
console.log(computerRandom);

var numberOfGuess = 0;
var guessedNumber = [];

function startGame() {
  var userGuess = document.getElementById("guess").value;

  if (userGuess < 1 || userGuess > 100) {
    alert("Gecerli bir sayi giriniz");
  } else {
    numberOfGuess++;
    guessedNumber.push(userGuess);
    if (userGuess < computerRandom) {
      msg1.textContent = "Trying: " + numberOfGuess;
      msg2.textContent = "Onceki girilen sayilar: " + guessedNumber;
      msg3.textContent = "Cok dusuk";
    } else if (userGuess > computerRandom) {
      msg1.textContent = "Trying: " + numberOfGuess;
      msg2.textContent = "Onceki girilen sayilar: " + guessedNumber;
      msg3.textContent = "Cok buyuk";
    } else if (userGuess == computerRandom) {
      msg1.textContent = "Trying: " + numberOfGuess;
      msg2.textContent = "Onceki girilen sayilar: " + guessedNumber;
      msg3.textContent = "Kazandiniz";
    }
  }
}
