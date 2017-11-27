var inquirer = require('inquirer');

var WordGen = require('./word.js');
var Word = new WordGen();



var Game = function(name) {
	this.name = name
	this.namePrompt = function() {
		inquirer.prompt([
			{
				message: "What's your name?",
				type: 'input',
				name: 'name',
				default: 'TA'
			}
		]).then(function(entry) {
			// console.log(this.name = entry);

			Word.wordPick();
		});
	}
}

var initGame = new Game();
initGame.namePrompt();