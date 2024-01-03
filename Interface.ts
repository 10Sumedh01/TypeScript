
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



