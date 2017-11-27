var inquirer = require('inquirer');

var chosenWord = {
	incomplete: [],
	complete: []
}

var lives = 10; 
var correctLetters;

var Letter = function(){
	// create + print blank spaces
	this.initWord = function (word) {
		chosenWord.complete = word.split('');
		correctLetters = word.length;

		for (i=0; i<word.length; i++) {
			chosenWord.incomplete.push(" _ ")
		}
		// print blank spaces
		this.printWord();

		// call user guess
		userGuess();
	};
	this.printWord = function() {
		console.log(chosenWord.incomplete.join(" "));
	};
}



var userGuess = function() {
	inquirer.prompt([
		{
			message: "Choose a letter",
			type: 'input',
			name: 'guess',
		}
	]).then(function(guess) {

		if (lives>0 && correctLetters>0) {
			validate(guess);
		} else {

			if(correctLetters = 0) {
				return console.log("\nGOOD JOB! (game over)\n")
			} 
			if (lives = 0) {
				return console.log("\nGAME OVER\n")
			}

		}
	});	
}

var validate = function(guess) {

	for (i=0; i<chosenWord.incomplete.length; i++) {
		if (chosenWord.complete[i] === guess.guess[0])  {
			
			 chosenWord.incomplete[i] = chosenWord.complete[i].replace(/,/g, '');
			 console.log(chosenWord.complete);

			 correctLetters --;
			 lives --;
			 console.log("correctLetters: " + correctLetters + " || Lives " + lives);


		}
	}

	// if (correctLetters = 0) {
	// 	return console.log("\nGOOD JOB! (game over)\n")
	// }
	console.log(chosenWord.incomplete.join(' '));
	userGuess();
};


module.exports = Letter
