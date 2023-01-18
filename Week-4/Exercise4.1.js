const pro=new Promise(function(resolve, reject)
{
    const rNo= parseInt(Math.random()*100,10);

    setTimeout(()=>{
        if (rNo%5===0){
        reject('promise rejected: ${rNo} ')
    }
    else{
        resolve("promise is resolved")
    }
}, rNo*10)
})
pro.then(console.log)
pro.catch(console.log)

// pro.then(console.log( pro.resolve))
// pro.catch(pro.reject)