// let myname = "mohini     ";

// console.log(myname.truelength);

let myHeros = ["thor", "spiderman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderpower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.mohini = function(){
    console.log("Mohini is present in all objects");
    
}


Array.prototype.heyMohini = function(){
    console.log("Mohini says hello");

}
// heropower.mohini()

// myHeros.mohini()
// myHeros.heyMohini()
// heropower.heyMohini()


// inheritance

const user = {
    name: "chai",
    email: "chai@example.com"
}

const Teacher = {
    makevdo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);

    
}

anotherUsername.trueLength()
"mohini".trueLength()
"iceTea".trueLength()