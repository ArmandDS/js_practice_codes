
const A = {
    elem: 5
}

const B = {
    elem: 10,
    getElem(num){
        return this.elem*num
    }
}

const getElem = B.getElem;

const boudElem = getElem.bind(B);


// console.log(boudElem.apply(B, 10));

console.log(boudElem( 10));

// console.log(getElem.call(A, 10));
;


