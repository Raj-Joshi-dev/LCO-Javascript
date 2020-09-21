var user = {
  firstName: "Raj",
  lastName: "Joshi",
  role: "Admin",
  loginCount: 20,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses.`;
  },
  getUserinfo: function () {
    console.log(
      this.firstName,
      this.lastName,
      this.role,
      this.loginCount,
      this.facebookSignedIn,
      this.courseList.length
    );
  },
};

user.buyCourse("MERN Stack");
user.buyCourse("Complete Javascript");

// console.log(user.getCourseCount());

console.log(user.getUserinfo());
