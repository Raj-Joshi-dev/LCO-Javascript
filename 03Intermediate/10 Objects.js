// Objects are always declared with braces '{}' unlike arrays '[]'

var smartphone = {
  model: "iphone",
  version: 11,
  ios: 13.6,
  processor: "Apple Bionic 13",
  storage: 128 + "GB",
  headphoneJack: false,
  cost: 750 + "$",
};

// console.log(smartphone["model"]); // can be written as this

// console.log(smartphone.processor); // dot noation

console.table(smartphone);
