function getFunc(lenght) {
  const len = lenght;
  let last_pos = 0;
  let total_len = 0;
  return function(starpos, endpos) {
    if (starpos<len && endpos < len) {
      console.log(last_pos, 'last_pos', endpos);
      total_len = Math.abs(starpos-endpos) +Math.abs(starpos-last_pos);
      if ( total_len <= 5) {
        last_pos = endpos;
        return total_len*100;
      }
      if (total_len > 5 && total_len <=10) {
        last_pos = endpos;
        return total_len*150;
      } if (total_len >10) {
        last_pos = endpos;
        return total_len*200;
      }
    }
  };
}
var f = getFunc(20);

console.log(f(0, 3));

console.log(f(6, 9));

console.log(f(12, 0));
