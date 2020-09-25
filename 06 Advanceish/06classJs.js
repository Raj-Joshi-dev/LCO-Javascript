class User {
  constructor(name, email) {
    (this.name = name), (this.email = email);
  }
  courseList = [];

  getInfo() {
    return { name: this.name, email: this.email };
  }

  enrollCourse(name) {
    this.courseList.push(name);
  }

  getCourseList() {
    return this.courseList;
  }

  static login() {
    return "You are logged in!";
  }
}

class SubAdmin extends User {
  constructor(name, email) {
    super(name, email);
  }

  getAdminInfo() {
    return "I am subadmin!";
  }

  login() {
    return "Login for admin only!";
  }
}

module.exports = User;

const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.getInfo());
console.log(tom.login());
