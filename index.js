var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomString = randomNumber1.toString();

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var randomString2 = randomNumber2.toString();

document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomString + ".png");
document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomString2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "🚩player 1 win!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "player 2 win!🚩";
} else {
  document.querySelector("h1").innerText = "Draw!";
}
document.getElementsByTagName("h1")[0].draggable = true;
console.log(document.getElementsByTagName("h1"));

// var diceArray = [
//   "images/dice1.png",
//   "images/dice2.png",
//   "images/dice3.png",
//   "images/dice4.png",
//   "images/dice5.png",
//   "images/dice6.png",
// ];

// var randomIndex = Math.random();
// randomIndex = randomIndex * 5;
// randomIndex = Math.floor(randomIndex);

// var randomIndex2 = Math.random();
// randomIndex2 = randomIndex2 * 5;
// randomIndex2 = Math.floor(randomIndex2);

// document.querySelector(".img1").setAttribute("src", diceArray[randomIndex]);

// document.querySelector(".img2").setAttribute("src", diceArray[randomIndex2]);

// if (randomIndex > randomIndex2) {
//   document.querySelector("h1").innerText = "🚩player 1 win!";
// } else if (randomIndex < randomIndex2) {
//   document.querySelector("h1").innerText = "player 2 win!🚩";
// } else {
//   document.querySelector("h1").innerText = "Draw!";
// }
// document.getElementsByTagName("h1")[0].draggable = true;
// console.log(document.getElementsByTagName("h1"));
