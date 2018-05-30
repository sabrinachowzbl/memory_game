console.log("Up and running!");

var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
]

var cardsInPlay = [];


var a = 0;
var flipCard = function () {


	var ID = this.getAttribute('data-id');
	console.log('user flipped ' + cards[ID].rank);
	this.removeAttribute("src", "images/back.png");
	this.setAttribute("src", cards[ID].cardImage);
	cardsInPlay.push(cards[ID].rank);
	a ++;

	if (a == 2) {
		setTimeout(checkForMatch, 250);
	}

}


var createBoard = function () {
	for (var i = 0; i < 4; i++) {

		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
}



var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match!");
	} else {
		alert("please try again D:");
	}
}


createBoard();