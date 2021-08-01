// Use of for in and for of in JS

const names = ["Google", "Amazon", "Netflix", "Instagram", "Twitter"];

// for (const n of names) {
//   console.log(n);
// }

const symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "Facebook",
  lco: "LearnCodeOnline",
};

for (const n in symbols) {
  console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}
