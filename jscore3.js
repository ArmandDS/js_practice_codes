
function printAndNorm(str, nomalize){
    console.log(str);
    return nomalize(str);
}

const name1 = 'CodeTest';

const normName1  = printAndNorm(name1, str => str.toLowerCase());

console.log(normName1);

const normName2  = printAndNorm(normName1, str => {
    str = str.toUpperCase();
});

console.log(normName2, 'call');


