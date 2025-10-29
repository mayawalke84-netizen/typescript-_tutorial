// ************************************
// TypeScript String and Common Methods
// ************************************

// A string represents a sequence of characters enclosed in quotes
let text: string = " TypeScript ";

// 1️⃣ charAt(index) – returns the character at the given index
console.log("1. charAt(1):", text.charAt(1)); // Output: T


// 2️⃣ concat() – joins two or more strings
let firstName: string = "John";
let lastName: string = "Doe";
let fullName = firstName.concat(" ", lastName);
console.log("2. concat():", fullName); // Output: John Doe


// 3️⃣ replace() – replaces a substring with another string
let replacedText = text.replace("TypeScript", "JavaScript");
console.log("3. replace():", replacedText); // Output:  JavaScript 



// 4️⃣ split() – splits a string into an array based on a delimiter
let fruits: string = "apple,banana,orange";
let fruitArray = fruits.split(",");
console.log("4. split():", fruitArray); // Output: ["apple", "banana", "orange"]



// 5️⃣ substring(start, end) – extracts part of the string
console.log("5. substring(1, 7):", text.substring(1, 7)); // Output: TypeSc



// 6️⃣ toUpperCase() – converts the string to uppercase
console.log("6. toUpperCase():", text.toUpperCase()); // Output:  TYPESCRIPT 



// 7️⃣ toLowerCase() – converts the string to lowercase
console.log("7. toLowerCase():", text.toLowerCase()); // Output:  typescript 



// 8️⃣ trim() – removes whitespace from both ends of the string
console.log("8. trim():", text.trim()); // Output: TypeScript

// ************************************
// Example combining multiple methods
// ************************************

let message: string = "   welcome to typescript world   ";
let formattedMessage = message.trim().toUpperCase().replace("TYPESCRIPT", "JAVASCRIPT");
console.log("Formatted Message:", formattedMessage); 
// Output: WELCOME TO JAVASCRIPT WORLD
