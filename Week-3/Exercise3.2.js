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
fullname.call(p2, "seventh", "Srinagar");

//apply
fullname.apply(p1, ["nine", "kolkata"]);
fullname.apply(p1, ["seventh", "Srinagar"]);

//bind
let namebind= fullname.bind(p2, "seventh", "Srinagar");
console.log(namebind);
namebind();
