const Kardane= function(arr){
  if (!arr)  return 0;
  
  if(arr || arr.length===1){
    if(arr[0]<0){
        return 0;
    }
  }
  
    //kardane algo
    let curent_sum=arr[0];
    let max_sum=arr[0];

    for(let i=1;i<arr.length;i++){
        curent_sum=Math.max(arr[i], curent_sum+arr[i]);
        max_sum=Math.max(curent_sum, max_sum);
    }
    return max_sum;
}    

let arr=[-2,-3,4,-1,-2,1,5,-3];
let blankArr=[];  //0
let OneElement=[1]; //1
let OneNegativeElement=[-1];//0
let NegNumberArr=[-3,-6,-7,-5,-3,-30];

console.log('Max sum: '+Kardane(arr));
console.log('Max sum blankArr:'+Kardane(blankArr));
console.log('Max sum OneElement:'+Kardane(OneElement));
console.log('Max sum OneNegativeElement:'+Kardane(OneNegativeElement));
console.log('Max sum NegNumberArr:'+Kardane(NegNumberArr));




