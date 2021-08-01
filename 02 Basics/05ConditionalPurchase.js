// User is only allowed to make a purchase when he is:
// logged in
// email verified
// cardInfo - valid
// If anyone is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = false;
var cardInfo = true;

//advance solution

if (isLoggedIn && isEmailVerified && cardInfo) {
  console.log('Allow user to make a purchase');
} else {
  console.log('You are NOT allowed to do that');
}
