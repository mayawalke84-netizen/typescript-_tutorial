// **** Single Type array ****
var fruits1 = ["Apple", "Banana", "Mango"];
var fruits2 = ["Apple", "Banana", "Mango"];
console.log(fruits1);
console.log(fruits2);
// **** Multi Type array ****
var values = ["Apple", "Banana", "Mango", 100, 10];
console.log(values);
var fruits = ["Tomato", "Carrot", "Potato"];
//To get a element using index
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
// For loop
console.log("Reading elements by using for loop..............");
var nums = [10, 20, 30];
for (var i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
console.log("Reading elements by using for in loop..............");
var fruits3 = ["Apple", "Banana", "Mango"];
for (var index in fruits3) {
    console.log(index, fruits3[index]);
}
