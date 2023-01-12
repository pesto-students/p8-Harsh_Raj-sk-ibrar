const pro=new Promise(function(resolve, reject)
{
    const rNo= parseInt(math.random()*100,10);

    setTimeout(()=>{
        if (rNo%5===0){
        reject("promise rejected")
    }
    else{
        resolve("promise is resolved")
    }
})
})