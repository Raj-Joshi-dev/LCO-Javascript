/*
Notes:

Function declarations are scanned and made available
Variable declarations are scanned and made undefined
*/

function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}

tipper(5);

var bigTipper = function (a) {
  var bill = parseInt(a);
  console.log(bill + 20);
};

bigTipper(200);

function sayName() {
  var name = 'Mr. R';
  console.log(name);
}

console.log(name);
