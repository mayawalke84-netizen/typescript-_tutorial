// ************ Named function ************
function display() {
    console.log("Welcome to typescript....");
}
display();
// ************ Named function with parameter and return type ************
var add = function (a, b) {
    return a + b;
};
console.log(add(10, 20)); // 30
console.log("************************************");
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Maya")); // Output: Hello, Maya!
// ************ Anonymous function ************
var greeting = function () {
    console.log("Welcome.......");
};
greeting();
var add1 = function (a, b) {
    return a + b;
};
console.log(add1(100, 200)); // 300
