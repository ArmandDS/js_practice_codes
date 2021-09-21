<<<<<<< HEAD

function ot(length){

    const len = length;
    let final_pos = 0;
    return function(startpos, endpos){

        let total = Math.abs(startpos- endpos) + Math.abs(startpos- final_pos)
        if( total <= 5){
            final_pos = endpos;
            return total*100
        }else if(total > 5 && total <= 10){
            final_pos = endpos;
            return total*150

        }else{
            
            final_pos = endpos;
            return total*200
        }


    }
}



var f = ot(20);

console.log(f(0, 3)); 

console.log(f(6, 9));

console.log(f(12, 0));  
=======
function ot(length) {
  const len = length;
  let final_pos = 0;
  return function (startpos, endpos) {
    const total = Math.abs(startpos - endpos) + Math.abs(startpos - final_pos);
    if (total <= 5) {
      final_pos = endpos;
      return total * 100;
    } else if (total > 5 && total <= 10) {
      final_pos = endpos;
      return total * 150;
    } else {
      final_pos = endpos;
      return total * 200;
    }
  };
}

var f = ot(20);

console.log(f(0, 3));

console.log(f(6, 9));

console.log(f(12, 0));
>>>>>>> 524568567a60a21bfb471400eaa104b8ddeace15
