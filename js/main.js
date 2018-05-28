console.log("Up and running!");

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log('User flipped ' + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);


if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("you found a match!")
} else {
	alert("please try again D:")
}