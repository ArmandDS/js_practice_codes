function sayHi(fullname, callback) {
  console.log(`Hi, ${fullname}!`);
  if (typeof callback === "function") {
    callback();
  }
}

function sayBye(fullname, callback) {
  console.log(`Bye, ${fullname}!`);
  callback();
}

function printMessage(firstname, lastname, callback) {
  const fullname = `${firstname} ${lastname}`;
  console.log(`Hi, ${fullname}!`);
  if (typeof callback === "function") {
    callback(fullname);
  }
}

printMessage("jon", "snow", (x) => console.log(x));

printMessage("mark", "newman", sayHi);
