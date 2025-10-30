//When you don’t know how many arguments will be passed, use ....(ellipsis)
// //Normal function
// function Greet(greetingmsg:string, name: string):string
// {
// return greetingmsg+ " " +name;
// }

// console.log(Greet("Hello","John"));

//Rest parameter

function Greet(greetingmsg:string,... name: string[]):string
{
return greetingmsg+ " " +name;
}

console.log(Greet("Hello","John"));
console.log(Greet("Hello"));
console.log(Greet("Hello","John","Smith",'Maya'));