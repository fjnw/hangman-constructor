
// chooses random word
var WordGen = function(){
	this.wordBank = ["APP", "BOW", "CAR"];
	this.word;

	this.wordPick = function() {
		word = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
  		//console.log("Random word: " + word);

  		// calls initWord() to convert word to blank lines
  		letterJS.initWord(word);
	};
};

// export to main.js
module.exports = WordGen;

var Word = new WordGen();


//=============================================================


// only NPM used
var inquirer = require('inquirer');

// main.js used to restart game
// var Game = require("./main.js");
// var initGame = new Game.Game();


// Incomplete = displayed to user. Complete = checked against
var chosenWord = {
	incomplete: [],
	complete: []
}

// 10 chances. When lives = 0 --> game over
var lives = 10; 

// Random word length. Each correct letter substracts 1 from correctedLetters
// When correctedLetters = 0  --> game over
var correctLetters;



// initializes word with blank characters 
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

	// print word progress
	this.printWord = function() {
		console.log(chosenWord.incomplete.join(" "));
	};
}


var letterJS = new Letter();


//=============================================================



// prompts users & manages game
var userGuess = function() {

	// if user matched all letters (game won)
	if (correctLetters === 0) {
		console.log("\nGame over, you won\n")

		// prompt user to restart game
		inquirer.prompt ([
			{
	        message: "Do you want to play again?",
	        type: "list",
	        name: "continue",
	        choices: ["Yes", "No" ]
	   	}
   	]).then(function(response) {

   		// user wants to Restart
   		if (response.continue == "Yes") {
   			lives = 10;
   			
   			Word.wordPick();

   		// user wants to end
   		} else {
   			return console.log("Have a good day");
   		}
   	});

   // if user runs out of lives (game over)
	} else if (lives === 0) {
		console.log("\nGame over, you lost\n")

	// if letters & lives available
	} else {

		// prompt user for letter
		inquirer.prompt([
			{
				message: "Choose a letter",
				type: 'input',
				name: 'guess',
			}
		]).then(function(guess) {

			// check for letter matches with user guess
			validate(guess)
		});
	}
}

// validate user guess
var validate = function(guess) {

	// iterate word length & find matches w/ answer key
	for (i=0; i<chosenWord.incomplete.length; i++) {

		// if answer key index matches user input
		if (chosenWord.complete[i] === guess.guess[0]) {
				chosenWord.incomplete[i] = chosenWord.complete[i].replace(/,/g, '');

				correctLetters --;
				lives --;
		}
	}
	// print updated word
	console.log(chosenWord.incomplete.join(' '));

	// prompt new userGuess
	userGuess();
};

