
// Adding types to the parameters of the function


function user(name:string, age:number, loggedIn:boolean):any{
    console.log(`Hello ${name}! You are ${age} years old. You are ${loggedIn ? 'logged in' : 'not logged in'}`);    
};

user('sumedh',19, true);

// if the user did not give the loggedIn value it this function will throw an error 
// so to over it we can resign with a default value "" loggedIn:boolean = false ""

const user2 = (name:string, age:number, loggedIn:boolean = false) => {
    console.log(`Hello ${name}! You are ${age} years old. You are ${loggedIn ? 'logged in' : 'not logged in'}`);       
}

user2('sumedh',19, false);
user2('susha',19);



// Adding type or return-type to a function

const paidUser = (userId : any, isPaid : Boolean = false) : string=> {
    return `User with ${userId} is ${isPaid ? 'a paid user' : 'not a paid user '}`;
};

var temp = paidUser('sumedh006060');
console.log(temp);

export {}