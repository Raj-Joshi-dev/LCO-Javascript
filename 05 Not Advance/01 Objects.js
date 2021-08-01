// New Keyword and what is proto in Javascript

var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function (){
        console.log(`Course count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function () {
    console.log(`First Name is: ${this.firstName}`);
}

var raj = new User("raj", 2);
raj.getCourseCount();
// raj.getFirstName();
// console.log(raj);

var sam = new User("sam", 3);
sam.getCourseCount();
sam.getFirstName();
// console.log(sam);


// Better code with object chain in javascript

if (raj.hasOwnProperty("firstName")) {
    raj.getFirstName()
}