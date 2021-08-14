

var arr = ['first', 'second', 'third', 'fourth'];

for (var i= 0; i<3; i++) {
  console.log(i);
  setTimeout(()=>{
    console.log(arr[i]);
  }, 2500);
}


// fourt
// fourt
// fourt
