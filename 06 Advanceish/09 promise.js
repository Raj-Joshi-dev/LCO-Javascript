const eins = () => {
  return "I am one";
};

const zwei = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am two");
    }, 2000);
  });
};

const drei = () => {
  return "I am three";
};

const callMe = async () => {
  let valOne = eins();
  console.log(valOne);

  let valTwo = await zwei();
  console.log(valTwo);

  let valThree = drei();
  console.log(valThree);
};

callMe();
