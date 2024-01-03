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
