function maxComS(words, k) {
  let matrix_1 = [];
  let longest = 0;
  let c = 0;
  let long_str = "";
  const result = [];
  const resultado = {};
  words.forEach((element) => {
    longest = 0;
    c = 0;
    // long_str = '';
    words.forEach((ele) => {
      const m = element.length + 1;
      const n = ele.length + 1;
      long_str = "";
      longest = 0;
      c = 0;
      // console.log(m,n);
      matrix_1 = [];
      for (let i = 0; i < m; i++) {
        matrix_1[i] = [];
        for (let j = 0; j < n; j++) {
          matrix_1[i][j] = 0;
        }
      }
      // console.log(matrix_1);
      for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
          if (element[i] == ele[j]) {
            c = matrix_1[i][j] + 1;
            // console.log(c);
            matrix_1[i + 1][j + 1] = c;
            if (c >= longest) {
              if (c == longest) {
                long_str += " " + element.slice(i - c + 1, i + 1);
              }
              longest = c;
              long_str = element.slice(i - c + 1, i + 1);
            }
          }
        }
      }

      if (element !== ele) {
        if (result.includes(long_str) != true) {
          result.push(long_str);
        }
      }
    });
  });
  console.log(result);
  result.forEach((res) => {
    words.forEach((wres) => {
      if (wres != res) {
        // console.log(res, wres);
        if (wres.includes(res)) {
          if (resultado[res]) {
            resultado[res]++;
          } else {
            resultado[res] = 1;
          }
        }
      }
    });
  });

  const max_val = Object.keys(resultado);

  const result_filter = [];

  max_val.forEach((ele) => {
    if (resultado[ele] >= k) {
      result_filter.push(ele);
    }
  });

  // console.log(result_filter);
  let max_letter = [];
  if (result_filter.length != 1) {
    result_filter.sort((a, b) => {
      if (a < b) return -1;
      return 0;
    });

    let max_split_letters = 0;
    result_filter.forEach((elem) => {
      if (elem.toString().split("").length >= max_split_letters) {
        max_split_letters = elem.toString().split("").length;
      }
    });
    max_letter = result_filter.filter((elem) => {
      if (elem.toString().split("").length == max_split_letters) {
        return elem;
      }
    });
    return max_letter[0];
  }
  console.log(max_letter);

  return result_filter[0];
}

console.log(maxComS(["dragon", "rage", "age", "savage"], 2));

console.log(maxComS(["aaaaa", "aabbbaa", "bbbaabbb", "ccc", "ccbbbc"], 3));

console.log(
  maxComS(
    [
      "luclnyuvojoculuaielduaudv",
      "dwrsztqgvqadsfepqwlfmdliw",
      "mdvfkozievilwxweczgwcvvbo",
      "qbefugwzqgdwmolqibbyyzdvm",
    ],
    3
  )
);
