
// Nro 18


const obj = {
  sum: 0,
  addMul(nums) {
    nums.forEach((x)=>{
      this.sum +=x;
    });
  },
};

console.log(obj.addMul([1, 2, 3]));


console.log(obj.sum);


// //Replace wih arrow
