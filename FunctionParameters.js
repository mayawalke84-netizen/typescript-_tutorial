// Example 1
function greet1(greeting, name) {
    return greeting + " " + name;
}
console.log(greet1("Hello", "John"));
//Optional parameters
// Example 2
function displayInfo(name, age) {
    console.log("Name: ".concat(name));
    if (age)
        console.log("Age: ".concat(age));
}
displayInfo("Maya");
displayInfo("Maya", 25);
// Default Parameters
//Ex 1
function Greet(name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return greeting + " " + name;
}
console.log(Greet('John')); //Hello John
console.log(Greet('John', 'Welcome'));
console.log(Greet('Welcome', 'John'));
console.log(Greet('smith'));
//Ex 2
function greetUser(name) {
    if (name === void 0) { name = "Guest"; }
    return "Welcome, ".concat(name, "!");
}
console.log(greetUser()); // Welcome, Guest!

console.log(greetUser()); // Welcome, Guest!
