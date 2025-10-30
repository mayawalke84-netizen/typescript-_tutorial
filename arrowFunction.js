//Arrow function is a Anonymous function / Fat arrow function
var sum = function (x, y) {
    return x + y;
};
console.log(sum(10, 20));
//Arrow function without parameter
var Print = function () {
    console.log("Welcome, to typescript....");
};
Print();
var Print = function () {
    return console.log("Welcome, to typescript....");
};
Print();
