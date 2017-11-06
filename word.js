var Letter = require("./letter.js");
var data = require("./CLI.js");


// what are the functionalities of the word function
function Word () {
	// it should take on of the words at random from the words array
	this.word= data.wordList[Math.floor(Math.random() * 3)];
	this.choose = function () {
		console.log(this.word);
	};
	// it should split the word into letters to be used later
	this.letters = function() {
		data.currentWord = this.word.split("");
		console.log(data.currentWord);
	};
	// it should create a new Letter for every letter in the array
	this.generateLetters = function() {
		//for every letter in the current word
		for (i = 0; i < data.currentWord.length; i++) {
			//run a new instance of the Letter constructor
			var newLetter = new Letter();
			//log it for testing
			console.log(newLetter);
		}
	}
}

var butt = new Word();

butt.choose();
butt.letters();
butt.generateLetters();

// module.exports = {
// 	currentWord:currentWord,
// 	Word:Word
// };