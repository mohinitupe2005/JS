const user = {
    username: "mohini",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details");
        // console.log(`USername:  ${this.username}`);     
        console.log(this);
        
    }

}


// console.log(user.username);   
// console.log(user.getUserDetails());
// console.log(this);



//**********Constructor*********/

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIN){
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIN = isLoggedIN;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this
}

const userOne = new User("mohini", 8, true)
const userTwo = User("shambho", 9, false)

console.log(userOne);
console.log(userTwo);

