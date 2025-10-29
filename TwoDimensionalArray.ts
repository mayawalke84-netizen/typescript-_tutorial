//1. Number array

let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  
  // string array

  let fruits4: string[][] = [
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
var myArray: (string | number)[][]= [[10, "XYZ"], ["ABC", 100]];
console.log("Printing multi type array........");
console.log(myArray);