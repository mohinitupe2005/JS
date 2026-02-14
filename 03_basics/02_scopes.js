//var c
let a = 300

if(true){
    let a = 10
    const b = 2
    //console.log("INNER: ", a)
    //var c = 30
}


// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "mohini"

    function two(){
        const website ="youtube"
        console.log(username);
    }
   // console.log(website);

    two()
}

//one()

if(true){

    const username = "mohini"
    if(username == "mohini"){
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);





//++++++++++++++++++ Interesting +++++++++++++++++++++
console.log(addOne(5))

function addOne(num){
    return num + 1
}

// addOne(5)

console.log(addTwo(5))          //cannot access before declaration
const addTwo = function(num){
    return num + 2
}

// addTwo(5)