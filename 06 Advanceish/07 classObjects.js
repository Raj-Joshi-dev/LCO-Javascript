// import User from "./06classJs"; <-- This is usually used in many frameworks

const User = require("./06classJs.js");

var raj = new User("raj", "joshiraj008@gmail.com");

console.log(raj.getInfo());
raj.enrollCourse("MERN Bootcamp");
raj.enrollCourse("Angular Bootcamp");

let courses = raj.getCourseList();

// TODO: Seperate course names by line!
courses.forEach((course) => {
  raj.getCourseList();
  console.log(`The registered courses are: ${course}`);
});
