// Destructure data in Javascript

// Array implementation
let user = ["raj", 3, "admin"];
// var role = user[2];
// var name = user[1];

// var [name, courseCount, role] = user;

// console.log(role, name);

// Object implementation
const myUser = {
	name: "raj",
	courseCount: 3,
	role: "admin",
};

console.log(myUser.name);

const { name, courseCount, role } = myUser;
console.log(courseCount);
