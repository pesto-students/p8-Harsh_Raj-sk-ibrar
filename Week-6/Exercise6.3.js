function sort_zero_ones(arr){
    

    let l=0;
    let m=0;
    let h=arr.length-1;
    //temp=0;
    while(m<=h){
        if(arr[m]==0){
           let temp=arr[l];
            arr[l]=arr[m];
            arr[m]=temp;
            l++;
            m++;
        }
        else if(arr[m]== 1){
            m++;
        }
        else {
            let temp=arr[m];
                arr[m]= arr[h];
                arr[h]= temp;
                h--;
        }
    }
}

function print(arr){
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
}
let arr=[2,0,1,0,1,2,0,1,2,0,0,1,2,2];
sort_zero_ones(arr);
print(arr);



