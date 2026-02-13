//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "mohini",
            lastname: "tupe"
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname);

const obj1 ={
    1:"a",
    2: "b"
}
const obj2 = {3: "c", 4:"d"}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2)    //ho ssakta hai aur bi values ho uske liye easy hai {} lagana

const obj3 = {...obj1, ...obj2}        //spread operator
  
//console.log(obj3);

const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js ",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const{ courseInstructor: instructor } = course   //destructure

//console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) => {

// }

// navbar(company = "mohini")


//API
//json
// {
//     "name": "mohini",
//     "coursename":"Json"
//     "id":"123abc"
// }

[
    {},
    {},
    {}
]


