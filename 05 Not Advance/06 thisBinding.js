// Borrow a method using bind

const raj = {
	firstName: "Raj",
	lastName: "Joshi",
	role: "Admin",
	courseCount: 3,
	getInfo: function () {
		console.log(`
        First name is: ${this.firstName}
        Last name is: ${this.lastName}
        His role is: ${this.role}
        and he is studying: ${this.courseCount}
        `);
	},
};

const dj = {
	firstName: "Rock",
	lastName: "DJ",
	role: "sub-admin",
	courseCount: 4,
};

// raj.getInfo();
// dj.getInfo();

// var djInfo = raj.getInfo.bind(dj);
// djInfo();

raj.getInfo.call(dj);
