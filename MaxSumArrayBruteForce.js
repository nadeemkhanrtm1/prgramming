function MaxSumSubArrayBruteForce(arr){
    //initialize sub array variable
    const sub_array = [];
    
    //generating all sub array
    for(let i = 0; i<arr.length; i++){
        for(let j = i; j<arr.length ; j++){
          const sb = []
          for(let k=i; k<=j; k++){
              sb.push(arr[k])
          }
          sub_array.push(sb)
        }
      }

      // initialize sum of all sub array
      const sum = [];

      // sum of all sub array
      for(let i = 0; i<sub_array.length; i++){
        sum_arr = 0;
        for(let j=0; j<sub_array[i].length; j++){
          sum_arr = sum_arr + sub_array[i][j]
        }
        sum.push(sum_arr)
      }

        var max_sum = 0;
        var index_max_sum = 0;
        for(let i = 0; i<sum.length; i++){
            if(max_sum<sum[i]){
                max_sum = sum[i];
                index_max_sum = i;
            }
        }
        return {max_sum, index_max_sum};
}
const arr = [1,2,3,4,5,-1];
console.log(MaxSumSubArrayBruteForce(arr))