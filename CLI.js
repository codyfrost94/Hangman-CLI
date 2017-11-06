var inquirer = require("inquirer");
var fs = require("fs");

// records how many guesses are left
var guessesLeft = 10;
var wordList = ["dodgers", "sriracha","helicopter"]
var currentWord = [];
var letters = [];

// this should start the game, choosing the word and displaying initial thing
function start() = {
	inquirer.prompt([])
		.then(function(answer)) {

		});
};

// function that will accept guesses and run itself again after each guess
function play() = {
	if (guessesLeft > 0) {
		inquirer.prompt([])
			.then(function(answer)) {
			// This is where the logic for the user choice goes
			})
	};

	else {
		console.log("You Lose!")
	}

}

module.exports = {
	wordList:wordList,
	currentWord:currentWord
}