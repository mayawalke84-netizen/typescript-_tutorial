//1. Number array
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// string array
var fruits4 = [
    ["Apple", "Banana"],
    ["Mango", "Grapes"],
    ["Orange", "Pineapple"]
];
console.log("Printing number type array........");
console.log(matrix);
console.log("Printing string type array........");
console.log(fruits4);
console.log(fruits4[0][1]); // Banana
console.log(fruits4[2][0]); // Orange
// 2D multi type array
var myArray = [[10, "XYZ"], ["ABC", 100]];
console.log("Printing multi type array........");
console.log(myArray);
//access 2D array
console.log(myArray[0][0]);
console.log(myArray[0][1]);
console.log(myArray[1][0]);
console.log(myArray[1][1]);
//**********  loop to access array elements using for loop ***********
for (var i_1 = 0; i_1 < matrix.length; i_1++) {
    for (var j_1 = 0; j_1 < matrix[i_1].length; j_1++) {
        console.log(matrix[i_1][j_1]);
    }
}
//**********  loop to access array elements using for in loop ***********
for (var i in myArray) {
    for (var j in myArray[i]) {
        console.log(myArray[i][j]);
    }
}
