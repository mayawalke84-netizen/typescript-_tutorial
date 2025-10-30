
// Example 1
function greet1(greeting: string, name: string): string {
    return greeting + " " + name;
}

console.log(greet1("Hello", "John"));


//Optional parameters
// Example 2

function displayInfo(name: string, age?: number): void {
    console.log(`Name: ${name}`);
    if (age) console.log(`Age: ${age}`);
}
displayInfo("Maya");
displayInfo("Maya", 25);


// Default Parameters

//Ex 1
function Greet(name:string, greeting: string= 'Hello'):string
{
return greeting+ " " +name;
}

console.log(Greet('John'));         //Hello John
console.log(Greet('John', 'Welcome'));          //Welcome John
console.log(Greet('Welcome', 'John'));      //John Welcome
console.log(Greet('smith'));    //Hello smith



//Ex 2
function greetUser(name: string = "Guest"): string {
    return `Welcome, ${name}!`;
}
console.log(greetUser()); // Welcome, Guest!


