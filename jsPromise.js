
const prom = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('prom');
    }, 1000)
    setTimeout(()=>{
        reject(new Error('!prom'));
    }, 5000)
});


prom.then(function(arg){
    console.log(arg);
    return new Promise((resolve, reject)=>{
        reject(new Error('!arg'))
    }).catch((err)=>{
        console.log(err.message, '2');
    });
}).catch((err)=>{
    console.log(err.message, '3');
})
