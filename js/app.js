
$(document).ready(function() {

	var pickNumber = function() {

		var userNumber = prompt("Pick a number between 1 and 100");

			if ( ( isNaN( userNumber ) ) || ( userNumber > 100 ) ) {
				console.log( "User Did Not Pick a Number" );
				userNumber = prompt( "Please pick a number between 1 and 100" );
				console.log( "User Number is: "+userNumber );
			}
			else {
				console.log( "User Number is: "+userNumber );
			}

		var convertNumber = +userNumber;

		var fizzbuzzStart = function() {
			for ( var i = 1; i <= convertNumber; i++) {
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

		fizzbuzzStart();
	}


	pickNumber();

});













