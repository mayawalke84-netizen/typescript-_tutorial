//  ************************ Arithmetic operators (+, -, *, /, %, **, ++, --) ************************
// Arithmetic operators are used to perform mathematical operations on numeric values.
// 1. Addition (+) Adds two numbers.
var a = 10;
var b = 5;
var sum = a + b;
console.log("Addition:", sum); // 15
// 2. Subtraction (-) Subtracts the right operand from the left operand.
var difference = a - b;
console.log("Subtraction:", difference); // 5
// 3. Multiplication (*) Multiplies two numbers.
var product = a * b;
console.log("Multiplication:", product); // 50
// 4. Division (/) Returns the remainder after division.
var quotient = a / b;
console.log("Division:", quotient); // 2
// 5. Modulus (%) Returns the remainder after division.
var remainder = a % b;
console.log("Modulus:", remainder); // 0
// 6. Increment (++) Increases a number by 1.
var num = 10;
num++; // num = num + 1
console.log("Increment:", num); // 11
// 7. Decrement (--) Decreases a number by 1.
var count = 5;
count--; // count = count - 1
console.log("Decrement:", count); // 4
// +++++++++++++ Combined Example +++++++++++++
var x = 20;
var y = 6;
console.log("x + y =", x + y); // 26
console.log("x - y =", x - y); // 14
console.log("x * y =", x * y); // 120
console.log("x / y =", x / y); // 3.3333
console.log("x % y =", x % y); // 2
x++;
console.log("x after increment:", x); // 21
y--;
console.log("y after decrement:", y); // 5
// *********************** Assignment Operators ***********************
// 1. Simple Assignment (=) Assigns a value to a variable.
var a = 10;
console.log("a =", a); // 10
// 2. Add and Assign (+=) Adds a value to a variable and assigns the result to the same variable.
var b = 5;
b += 3; // equivalent to b = b + 3
console.log("b += 3:", b); // 8
// 3. Subtract and Assign (-=) Subtracts a value from a variable and assigns the result.
var c = 10;
c -= 4; // equivalent to c = c - 4
console.log("c -= 4:", c); // 6
// 4. Multiply and Assign (*=) Multiplies a variable by a value and assigns the result.
var d = 6;
d *= 3; // equivalent to d = d * 3
console.log("d *= 3:", d); // 18
// 5. Divide and Assign (/=) Divides a variable by a value and assigns the result.
var e = 20;
e /= 5; // equivalent to e = e / 5
console.log("e /= 5:", e); // 4
// 6. Modulus and Assign (%=) Assigns the remainder after dividing by a value.
var f = 17;
f %= 3; // equivalent to f = f % 3
console.log("f %= 3:", f); // 2
// +++++++++++++ Combined Example +++++++++++++
var x = 10;
x += 5; // 15
x -= 3; // 12
x *= 2; // 24
x /= 4; // 6
x %= 4; // 2
console.log("Final x:", x); // 2
// *********************** 3. Relational / Comparison Operators ***********************
//Relational operators are used to compare two values. They return a boolean value: true or false.
// 1. Equal to (==)
// Checks if two values are equal, ignoring type.
// 2. Strict Equal to (===)
// Checks if two values are equal and of the same type.
// 3. Not Equal (!=)
// Checks if two values are not equal, ignoring type.
// 4. Strict Not Equal (!==)
// Checks if two values are not equal or not the same type.
// 5. Greater than (>)
// Checks if left value is greater than right value.
// 6. Greater than or Equal (>=)
// Checks if left value is greater than or equal to right value.
// 7. Less than (<)
// Checks if left value is less than right value.
// 8. Less than or Equal (<=)
// Checks if left value is less than or equal to right value.
var num1 = 20;
var num2 = 15;
var num3 = "20";
console.log("num1 == num3:", num1 == num3); // true
console.log("num1 === num3:", num1 === num3); // false
console.log("num1 != num2:", num1 != num2); // true
console.log("num1 !== num3:", num1 !== num3); // true
console.log("num1 > num2:", num1 > num2); // true
console.log("num2 < num1:", num2 < num1); // true
console.log("num1 >= 20:", num1 >= 20); // true
console.log("num2 <= 15:", num2 <= 15); // true
// Ternary Operator
// The ternary operator is a short-hand for if-else statements.
// It has three parts:
// condition ? expressionIfTrue : expressionIfFalse
// condition → boolean expression
// expressionIfTrue → value returned if condition is true
// expressionIfFalse → value returned if condition is false
var x = 10;
var y = 20;
var max = x > y ? x : y;
console.log("Maximum:", max); // 20
console.log(x < y ? x : y); //10
console.log(x > y ? x : y); //20
// *********************** 4. Logical Operators ***********************
// Logical operators are used to combine or invert boolean values. They always return a boolean result.
// 1. AND (&&)
// Returns true only if both operands are true.
// 2. OR (||)
// Returns true if at least one operand is true.
// 3. NOT (!)
// Inverts a boolean value.
// true becomes false and false becomes true.
var age = 20;
var hasParentalConsent = true;
var canAttendConcert = (age >= 18) || hasParentalConsent;
console.log("Can attend concert:", canAttendConcert); // true
var isWeekend = false;
var isHoliday = true;
console.log("Day off:", isWeekend && isHoliday); // false
console.log("Not holiday:", !isHoliday); // false
