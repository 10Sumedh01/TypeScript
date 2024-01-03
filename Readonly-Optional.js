// readonly -> Wont allow to change its value after assignment
// ? -> for optional value 
var usr1 = { name: 'sumedh', password: 'sumedh100', email: 'sumedh@gmail.com' };
console.log(usr1);
usr1.name = 'susha';
usr1.password = '123';
console.log("changed and password ".concat(usr1.name + " " + usr1.password + " " + usr1.email));
var richUser = { name: "santa", password: "santa123", creditCard: "santa123" };
var poorUser = { name: "banta", password: "banta123" }; //we havent passed the credit card value
console.log(richUser);
console.log(poorUser);
