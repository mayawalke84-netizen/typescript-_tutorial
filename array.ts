// **** Single Type array ****

let fruits1: string[] = ["Apple", "Banana", "Mango"];
let fruits2: Array<string> = ["Apple", "Banana", "Mango"];

console.log(fruits1);
console.log(fruits2);


// **** Multi Type array ****

var values: (string | number)[]= ["Apple", "Banana", "Mango", 100, 10];
console.log(values);


let fruits: string[] = ["Tomato", "Carrot", "Potato"];
//To get a element using index
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);



// For loop
console.log("Reading elements by using for loop..............");
let nums: number[] = [10, 20, 30];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}


console.log("Reading elements by using for in loop..............");
var fruits3: string[] = ["Apple", "Banana", "Mango"];

for (let index in fruits3) {
  console.log(index, fruits3[index]);
}