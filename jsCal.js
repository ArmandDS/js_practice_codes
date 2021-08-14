class calculator {
  constructor(starVal = 0) {
    this.val = starVal;
  }
  result() {
    return this.val;
  }
}

calculator.prototype.add = function (num) {
  this.val += num;
  console.log(this.result());
  return this;
};

calculator.prototype.mult = function (num) {
  this.val *= num;
  console.log(this.result());
  return this;
};

calculator.prototype.do = function (ope, num) {
  if (ope === "+") {
    this.add(num);
  } else if (ope === "*") {
    this.mult(num);
  }
};

const cal = new calculator(0);

// cal.do("+", 2).add(2).do("*", 2).mult(2);

console.log(cal);
