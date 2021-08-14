function decreaseByOne(arr) {
  const newA = JSON.parse(JSON.stringify(arr));
  newA[0]--;
  newA[1]--;
  return newA;
}

function sumOfFour(arr1, arr2) {
  return arr1[0] + arr1[1] + arr2[0] + arr2[1];
}

const arr1 = [1, 1];
const arr2 = decreaseByOne(arr1);

console.log(arr1, arr2);

console.log(sumOfFour(arr1, arr2));
