/*
Define a function that can answer the role of a user. 
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

function getUserRole(name, role) {
  switch (role) {
    case 'admin':
      return `${name} is admin with all access`;
      break; // this is not neccessary

    case 'subadmin':
      return `${name} is subadmin with acccess to create/delete courses`;
      break;

    case 'testprep':
      return `${name} is testprep with access to create/delete tests`;
      break;

    case 'user':
      return `${name} is user which consumes all content`;
      break;

    default:
      return `${name} is a trial user`;
      break;
  }
}

console.log(getUserRole('Raj', 'admin'));

var getRole = getUserRole('Sammy', 'testprep');

console.log(getRole);
