function math(operation, x){
    const OPERATION = {
        '*': (a,b) => a*b,
        '/': (a,b) => a/b,
        '+': (a,b) => a+b,
        '-': (a,b) => a-b
    }

    return function(y){
        return OPERATION[operation](x,y);
    }
}

const mul = math("*", 5);

const add = math("+", mul(2));

console.log(typeof add);

console.log(add(math('-', 25)(20)))


// Function and 15