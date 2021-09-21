
function promisesCombiner(...promises){

 let fulfilled = 0;
 let rejected = 0;
 return Promise.allSettled(...promises).then(val1 =>{
    console.log("VAL", val1)
    val1.forEach(element => {
        if (element['status'] == 'rejected'){
            rejected++
        }
    });
    if (rejected=== val1.length){
        return 0
    }
     return val1.length - rejected;
 })
 .catch(()=>{
     return 0
 })

}

const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(()=> reject('2 resolved'), 80);
    return 1;
  });

  const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(()=> reject('2 resolved'), 180);
    return 1;
  });

  const myPromise3 = new Promise((resolve, reject) => {
    setTimeout(()=> reject('2 resolved'), 50);
    return 1

  });



console.log([2,3,3].reduce((a,b)=>{
    return a*b;
}))



promisesCombiner([myPromise1, myPromise2, myPromise3]).then(x=> console.log(x)).catch(x => console.log(x))



// let result1 =  Promise.allSettled([myPromise1, myPromise2, myPromise3]);

// result1.then(val =>{
//     // console.log("VAL", val)
//     return  val.length
// })
// .catch((err)=>{
//     console.log("reject");
//     return 0;

// })

// result1.then((x)=>console.log(x)).catch((x)=>console.log(x));
// console.log(result1);