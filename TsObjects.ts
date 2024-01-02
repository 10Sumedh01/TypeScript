// const user1 ={
//     name: 'sumedh',
//     age:19,
//     isPaid:false,
// }

const checkUser = ({name: string, age:number, isPaid:boolean}) => {
    // console.log(`${name} is ${age=>18? 'allowed to be allowed to be a Prime member' : " underage that's why he is not allowed to be a prime user"} `);    
};

checkUser({name:"user1", age:19, isPaid:false});




// Object wirh a assigned Return type of a function
function checkUser2({name: string, age:number, isPaid:boolean}):{}{
    return {}
};

// Object wirh a sepecified return type of a function
//This function will return a object with the following properties fname= stirng age= number and lname = string
function checkUser3():{fname:string, age:number,lname:string}{
    return {fname:"sumedh", age:19, lname:"wature"}
};
console.log(checkUser3());




//Defining Types using 'interface' keyword
interface human {
    name:string;
    age:number;
    canWalk:boolean;
}

let man1:human = {name: "Man", age:99, canWalk:true};

//We can also add Type Alias inside the interface object
type swimming = "yes" | "no";
type walking = "yes" | "no";
interface fish{
    canSwin:swimming,
    canWalk:walking, 
}

let goldfish:fish = {canSwin:"yes",canWalk:"no"}
console.log(goldfish);




//Type Aliases "type" keyword
//Type Aliases is a way to crreate a shorthand for a specific type or we can create our own type 
type name = string | number;
let user4:name = 3;
let user5:name = "booby";
console.log(user4);
console.log(user5);

//Custom Type Aliases
type active = "active" | "inactive";
let user6:active = "active";
let user7:active = "inactive";
console.log(user6+" and "+user7);

//Custom Aliases for objects

type customHuman = {
    name: "chitti" | "mitti" | "bitti" | "cutie";
    power: "fire" | "water" | "rock" | "lovely smile";
}

let myRobot:customHuman = {name: "cutie", power: "lovely smile"}
console.log(myRobot);




export {}