
class IntegerArray{
    constructor(...val){
        val.forEach(v =>{
            // console.log(v, "V");
            if(!Number.isInteger(v)){
                throw new Error("No a integer")
            }
        });
        this.array = val;
    }
}


IntegerArray.prototype.sum = function(){
    return this.array.reduce((a,b) => a+b, 0);
}

IntegerArray.prototype.even = function(){
    return new IntegerArray(
        ...this.array.filter(num => num% 2 === 0)
    )
}

const arr = new IntegerArray(1,1,2,1,2);

console.log(arr.even().sum())
