const eins = () => {
  console.log("I am one!");
};

const zwei = () => {
  setTimeout(() => {
    console.log("Woooohooo!");
  }, 2000);
  console.log("I am Two");
};

const drei = () => {
  console.log("I am Three");
};

eins();
zwei();
drei();
