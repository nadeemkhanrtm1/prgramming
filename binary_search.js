function BS(arr,el){
    let l = 0;
    let h = arr.length - 1;
    let mid = Math.floor((l+h)/2);
    // console.log(arr[mid])
    var count = 0;
    while(el !== arr[mid]){
        if(el>arr[mid]){
            l = mid;
            mid = Math.floor((l+h)/2);
            // console.log("goes on right side");
        }else{
            h = mid;
            mid = Math.floor((l+h)/2);
            // console.log("goes on left side");
        }
    }
    
    if(el===arr[mid]){
        console.log("be a mid value",mid);
    }
}


BS([1,2,10,3],3)