
function maxC(words, k){

    const pre_result = [];
    words.forEach(w1 =>{

        let c = 0;
        let most_long = '';
        let longest = 0;
        words.forEach(w2 =>{

            let n = w1.length + 1;
            let m = w2.length +1;
            let matrix1 = [];
            longest = 0;

            for (let i= 0; i<n; i++){
                matrix1[i] =[];
                for(let j=0; j<n; j++){
                    matrix1[i][j] = 0;
                }

            }
            for(let i=0; i<n-1; i++){
                for(let  j=0; j<m-1; j++){


                    if(w1[i] == w2[j]){

                        c= matrix1[i][j] +1;
                        matrix1[i+1][j+1] = c;
                        
                        if(c >= longest){
                            longest = c;
                            most_long = w1.slice(i-c+1, i+1);
                            
                        }

                    }


                }

            }
            // console.log(w1, most_long);
            if(w1 !== most_long){
                if(!pre_result.includes(most_long)){
                    pre_result.push(most_long);
                }
            }


        })

 
    })

    const max_app = {};

    pre_result.forEach(pr =>{

        words.forEach(w =>{
            if(w.includes(pr)){
                if(max_app[pr]){
                    max_app[pr]++
                }else{
                    max_app[pr] = 1
                }
            }
        })

        
    })

    const filter_array = []

    Object.keys(max_app).forEach(key =>{
         if(max_app[key]>=k){
            filter_array.push(key)
        }
    })

    filter_array.sort((a,b)=>{
        if( a<b) return -1;
        return 0;
    })
    console.log( filter_array);
    let max_len = 0;
    const final_result = []
    filter_array.forEach(fa =>{
        if(fa.split("").length> max_len){
            max_len =fa.split("").length;
        }
    })

    filter_array.forEach(fa =>{
        if(fa.split("").length ==  max_len){
              final_result.push(fa)
        }
    })
    return final_result[0]
}




console.log(maxC(['dragon', 'rage', 'age', 'savage'], 2));


console.log(maxC(['aaaaa', 'aabbbaa', 'bbbaabbb', 'ccc', 'ccbbbc'], 3));

console.log(maxC(['luclnyuvojoculuaielduaudv', 'dwrsztqgvqadsfepqwlfmdliw', 'mdvfkozievilwxweczgwcvvbo', 'qbefugwzqgdwmolqibbyyzdvm'], 3));