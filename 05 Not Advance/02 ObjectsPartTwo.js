// Objects from MDN docs
var User = {
	name: "",
	getUserName: function () {
		console.log(`User Name is: ${this.name}`);
	},
};

var raj = Object.create(User);
console.log(raj);
raj.name = "RAJ";
raj.getUserName();

var sam = Object.create(User, {
	name: { value: "sammy" },
	courseCount: { value: 3 },
});

sam.getUserName();
