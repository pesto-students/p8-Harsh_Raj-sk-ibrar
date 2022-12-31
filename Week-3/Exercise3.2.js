let p1= {
    fName : "Mohit",
    lName : "Chauhan",
}

let p2= {
    fName : "Dhrub",
    lName : "Rathee",
}

let fullname= function (standard, hometown){
    console.log(this.fName + " " + this.lName + " " + " is in: " + standard + " from: "+ hometown);
}

//function call
fullname.call(p1, "nine", "kolkata");
fullname.call(p2, "nine", "kolkata");
