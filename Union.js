// TypeScript Union -> A union type is a type that can be one of several types. You can use the vertical bar (|) to separate each type.
// For example a score can be a number or a string
var score = 69; //type of score variable is a number as well as a string.
// It means it can store a number value as well as a string value.
score = 34;
score = "35";
var sumedh; //sumedh can be a user or a admin
sumedh = { name: "Susha", password: "Sushah123" }; // Here the Sumedh is a user 
console.log(sumedh);
sumedh = { name: "Susha", password: "Sushah123", loginId: "abc123", loginPassword: 123 }; // here sumedh is a Admin
console.log(sumedh);
//Union in Arrays
var data = [1, 2, 3, 4, 5];
var data2 = ["1", "2", "3"];
// creating the union of arrays
var data3 = [1, 2, 3, 4, 5]; // !Note!! This type of defination of type can either hold only one type of values.
// Like in the above example the data3 variable can only hold number values or string values 
//!! To make it accept both type of values ->
var data4 = [1, "2", 3, "4", 5]; // This can accept both type of values -> numbers as well as string
var data5 = [true, 2, "69", false];
