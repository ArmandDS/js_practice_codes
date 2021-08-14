

function outer() {
  let counter = 0;
  function increment() {
    counter +=1;
    return counter;
  }
  function dobleIncrement() {
    return incrementBy2(increment);
  }
  return {
    increment: increment,
    doubleIncrement: dobleIncrement,
  };
}


function incrementBy2(callback) {
  callback();
  return callback();
}


const obj = outer();
console.log(obj.increment());

console.log(obj.doubleIncrement());

const secondI = obj.increment;
console.log(secondI());


