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

//access 2D array
console.log(myArray[0][0]);
console.log(myArray[0][1]);
console.log(myArray[1][0]);
console.log(myArray[1][1]);


//**********  loop to access array elements using for loop ***********
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}


//**********  loop to access array elements using for in loop ***********

for (var i in myArray) {
  for(var j in myArray[i])
  {
    console.log(myArray[i][j]);
  }
  
}