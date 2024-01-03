// readonly -> Wont allow to change its value after assignment
// ? -> for optional value 

// readonly 
type User = {
    name: string
    password: string
    readonly email: string //readonly keyword makes it impossible to change the email value
}

let usr1:User = {name: 'sumedh', password: 'sumedh100',email: 'sumedh@gmail.com'};
console.log(usr1);
usr1.name = 'susha';
usr1.password = '123';
console.log(`changed and password ${usr1.name +" "+ usr1.password +" "+ usr1.email}`);

// usr1.email = 'santa@gmail.com'; // this line will throw an error 
// console.log(usr1);



//Optional "?"
type User2 ={
    name : string
    password : string
    creditCard ?: string; // The ? indicates that the creditCard value is optional
}

let richUser:User2 = {name: "santa", password: "santa123",creditCard: "santa123"}
let poorUser:User2 = {name: "banta", password: "banta123"} //we havent passed the credit card value
console.log(richUser);
console.log(poorUser);



