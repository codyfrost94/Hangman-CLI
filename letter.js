var data = require("./CLI.js");

function Letter() {
	// default is false because it should show up as _ until solved
	this.display=false,
	// this should grab the letter from the currentWord array that it's currently iterating on but right now its undefined for some reason
	this.letter= data.currentWord[i],
	//this will choose what to display depending on whether or not it's been guessed
	this.showValue = function() {
		if (this.display === false) {
			console.log("_ ");
		}
		else if (this.display === true) {
			console.log(this.letter + " ")
		}
	}

}

module.exports = Letter;