// Maps in Javascript

var myMap = new Map();

myMap.set(1, "Eins");
myMap.set(2, "Zwei");
myMap.set(3, "Drei");
myMap.set(4, "Vier");

// console.log(myMap);

// for (let key of myMap.keys()) {
// 	console.log(`Keys is: ${key}`);
// }

// for (let value of myMap.values()) {
// 	console.log(`Values is: ${value}`);
// }

for (let [key, value] of myMap) {
	console.log(`Keys is: ${key} and value is: ${value}`);
}

myMap.forEach((v, k) => console.log(`${k} and value is ${v}`));

myMap.delete(2);
console.log(myMap);
