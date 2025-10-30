// ************ Named function ************
 function display ()
{
    console.log("Welcome to typescript....")
}
display ();

// ************ Named function with parameter and return type ************

var add = function (a: number, b: number): number
{
    return a+b;
}

console.log(add(10, 20)); // 30

console.log("************************************")

function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  
  console.log(greet("Maya")); // Output: Hello, Maya!
  


  // ************ Anonymous function ************

  var greeting = function()
  {
    console.log("Welcome.......")
  }
  greeting();


  
  const add1 = function (a: number, b: number): number {
    return a + b;
  };
  console.log(add1(100, 200)); // 300
  