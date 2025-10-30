//You can define multiple function signatures for different argument types.

//Ex:1
function addition (a:number, b: number):number ;
function addition (a:string, b: string):string ;


function addition (a:any, b: any):any 
{
    return a+b;
}

console.log(addition(100,200));
console.log(addition("Hi","QA"));

console.log(addition("Hi","QA"));