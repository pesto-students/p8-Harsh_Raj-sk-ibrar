let fib = { 

    old_n: 0, 
    new_n: 1, 
    temp: 0, 

     [Symbol.iterator](){ 
        return this; 
     }, 

    next(){ 
        this.temp = this.new_n; 
        this.new_n = this.temp + this.old_n; 
        this.old_n = this.temp; 
        return {value: this.new_n} 
    } 
} 
console.log(fib.old_n);
console.log(fib.new_n);
for(let i=0; i<=10;i++){ 
       console.log(fib.next().value)  
} 