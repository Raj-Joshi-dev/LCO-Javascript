// Closure in Javscript

// function init() {
// 	var firstName = "raj";
// 	function sayFirstName() {
// 		console.log(firstName);
// 	}
// 	return sayFirstName();
// }

// var value = init();

// value();

function doAddition(x) {
	return function (y) {
		return x + y;
	};
}

var add5 = doAddition(6);
console.log(add5(8));

console.log(doAddition(5)(10));
