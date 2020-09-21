// Use of for, while and do while loop in JS

const myStates = [
  "Maharashtra",
  "Gujarat",
  "Goa",
  1947,
  "Punjab",
  "Madhya Pradesh",
];

// for (let i = 0; i < myStates.length; i++) {
//   if (typeof myStates[i] !== "string") continue;
//   console.log(myStates[i]);
// }

let i = 0;

// while (i < myStates.length) {
//   console.log(myStates[i]);
//   i++;
// }

do {
  console.log(myStates[i]);
  i++;
} while (i < myStates.length);
