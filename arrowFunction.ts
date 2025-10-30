//Arrow function is a Anonymous function / Fat arrow function


 var sum = (x:number, y:number):number =>
 {
return x+y;
 }

 console.log(sum(10,20))


 //Arrow function without parameter
 var Print = ()=>
 {
console.log ("Welcome, to typescript....")
 }
 Print();

 var Print = ()=>
console.log ("Welcome, to typescript without braces....")
Print();