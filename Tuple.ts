// Tuples -> Tuples are like arrays only, but the main use case of them is to create a strictly ordered array
// For Example: if we want to insert a number into the 1st index of an array and then insert string at the second so we can use tuples 

let xx: [boolean, string, number] = [true, "hello", 143]; //As we can see that the values has to be in the same order as their type assignments


type User = [ boolean, string, number];

let user1: User = [false, "Heyy", 123];  

user1[0] = true;
user1[1] = "Hemloo";
