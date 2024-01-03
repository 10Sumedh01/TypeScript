"use strict";
// Adding types to the parameters of the function
Object.defineProperty(exports, "__esModule", { value: true });
function user(name, age, loggedIn) {
    console.log("Hello ".concat(name, "! You are ").concat(age, " years old. You are ").concat(loggedIn ? 'logged in' : 'not logged in'));
}
;
user('sumedh', 19, true);
// if the user did not give the loggedIn value it this function will throw an error 
// so to over it we can resign with a default value "" loggedIn:boolean = false ""
var user2 = function (name, age, loggedIn) {
    if (loggedIn === void 0) { loggedIn = false; }
    console.log("Hello ".concat(name, "! You are ").concat(age, " years old. You are ").concat(loggedIn ? 'logged in' : 'not logged in'));
};
user2('sumedh', 19, false);
user2('susha', 19);
// Adding type or return-type to a function
var paidUser = function (userId, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return "User with ".concat(userId, " is ").concat(isPaid ? 'a paid user' : 'not a paid user ');
};
var temp = paidUser('sumedh006060');
console.log(temp);
