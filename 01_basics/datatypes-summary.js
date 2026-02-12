//kis tarah se data ko memory me likha jata hai uske basis pe types of data in js

//Primitive

//7: String, Number, Boolean, NULL, undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)

const bigNumber = 3453568923098509737n   //big int 



//javascript is dynamically typed language


//Reference type/Non-primitive

//Arrays, objects, functions

const heros = ["shaktiman", "nagraj", "doga"];
let myObj={
    name: "mohini",
    age: 21
}

const myFunc = function(){
    console.log("Hello world");
}

console.log(typeof id);



//+++++++++++++++++++++++++++++++++++++++++++++++
//Stack(primitive), Heap(Non-primitive)

let myYoutubeName = "mohinitupe"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email:"user@email.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "mohini@gmail.com"
console.log(userOne)
console.log(userTwo)