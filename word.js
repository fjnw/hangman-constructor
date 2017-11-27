
var Letter = require("./letter.js");
var letterJS = new Letter();


var WordGen = function(){
	this.wordBank = ["APPLE", "BOW", "CARROT", "DRUM"];
	this.word;
	// this.alphabet;
	// this.alphabetGen = function(c1 = 'a', c2 = 'z') {
	//     var a = 'abcdefghijklmnopqrstuvwxyz'.split('');
	//     this.alphabet = (a.slice(a.indexOf(c1), a.indexOf(c2) + 1));

	//     this.wordPick();
	// };
	this.wordPick = function() {
		word = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
  		console.log("Random word: " + word);

  		letterJS.initWord(word);
	};
};


module.exports = WordGen;
