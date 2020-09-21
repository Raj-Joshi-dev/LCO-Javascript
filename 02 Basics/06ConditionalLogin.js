// Allow user to access course if he is:
// logged in from email
// logged in from google
// logged in from facebook

var email = true;
var google = false;
var facebook = false;

if (email || google || facebook) {
  console.log('Login Success!');
} else {
  console.log('Login Failed!');
}
