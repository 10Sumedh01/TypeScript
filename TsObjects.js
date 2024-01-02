"use strict";
// const user1 ={
//     name: 'sumedh',
//     age:19,
//     isPaid:false,
// }
Object.defineProperty(exports, "__esModule", { value: true });
var checkUser = function (_a) {
    var string = _a.name, number = _a.age, boolean = _a.isPaid;
    // console.log(`${name} is ${age=>18? 'allowed to be allowed to be a Prime member' : " underage that's why he is not allowed to be a prime user"} `);    
};
checkUser({ name: "user1", age: 19, isPaid: false });
// Object wirh a assigned Return type of a function
function checkUser2(_a) {
    var string = _a.name, number = _a.age, boolean = _a.isPaid;
    return {};
}
;
// Object wirh a sepecified return type of a function
//This function will return a object with the following properties fname= stirng age= number and lname = string
function checkUser3() {
    return { fname: "sumedh", age: 19, lname: "wature" };
}
;
console.log(checkUser3());
var man1 = { name: "Man", age: 99, canWalk: true };
var goldfish = { canSwin: "yes", canWalk: "no" };
console.log(goldfish);
var user4 = 3;
var user5 = "booby";
console.log(user4);
console.log(user5);
var user6 = "active";
var user7 = "inactive";
console.log(user6 + " and " + user7);
var myRobot = { name: "cutie", power: "lovely smile" };
console.log(myRobot);
