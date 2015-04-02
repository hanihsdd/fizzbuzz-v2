$(document).ready(function() {

var userInput;

function validateNumber() {
do { 
	userInput = prompt("Please choose a number between 1-100")
} while ( isNaN( parseInt( userInput ) ) || parseInt(userInput) > 100  ||  parseInt( userInput ) < 1)
}

function fizzbuzz() {
	for ( var i = 1; i <= userInput; i++) {
		if (( i % 3 == 0) && ( i % 5 == 0)) {
			$("body").append("Fizzbuzz<br>");
		}
		else if ( i % 3 == 0 ) {
			$("body").append("Fizz<br>");
		}
		else if ( i % 5 == 0 ) {
			$("body").append("Buzz<br>");
		}
		else {
			$("body").append(" " + i + "<br>");
		}
	}
}

validateNumber();

console.log(userInput);

fizzbuzz();

});





