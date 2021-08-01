// Lexical scoping in javascript

function init() {
	var firstName = "raj";
	function sayFirstName() {
		console.log(firstName);
	}
	sayFirstName();
}

init();
