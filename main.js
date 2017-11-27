
// only NPM used
var inquirer = require('inquirer');

// word.js to populate random word from bank
var WordGen = require('./word.js');
var Word = new WordGen();

// initial game
var Game = function() {

	// prompt and store user's name
	this.name;
	this.namePrompt = function() {
		inquirer.prompt([
			{
				message: "What's your name?",
				type: 'input',
				name: 'name',
				default: 'TA'
			}
		]).then(function(input) {
			this.name = input.name

			// get random word
			Word.wordPick();
		});
	}
}

// initiates game with name prompt, followed by picking random word
var initGame = new Game();
initGame.namePrompt();

// send to letter.js to restart game
module.exports = Game;