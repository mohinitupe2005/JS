// singleton
//object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Mohini",
    "full name": "Mohini Tupe",
    [mySym]: "mykey1",                          //always use [] for adding symbols in object
    age: 21,
    location: "Jaipur",
    email: "mohhini@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])


JsUser.email = "mohinitupe@email.com"
//Object.freeze(JsUser)
JsUser.email = "mohinitupe@gpt.com"

console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())