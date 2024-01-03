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



export {}