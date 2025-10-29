// var empID = 101;
// var empName= 'John';
// var empSalary = 50000;

//First way
var employee = [101, "John", 50000];

//Second way
var person: [string, number, boolean] = ["Alice", 25, true];

console.log(employee);

console.log("**************************");
console.log(person);



//Accessing tuple
console.log(employee[0]);
console.log(employee[1]);
console.log(employee[2]);
console.log(employee[3]);



//Add elements into tuple - push()

var employee = [1001, "Jonny", 50000];
console.log("Original tuple" + employee);

employee.push(1002, 'Scott', 60000)
console.log("Tuple after changes" + employee);


//Remove elements from tuple - pop()
//[1001,Jonny,50000,1002,Scott,60000]
employee.pop();
console.log("Tuple after removing elements" + employee);



//Update element in tuple

var student: [number, string] = [101, 'Smith'];
student[1] = 'David';
console.log(student);


//Tuple array

var employees: [number, string][] = [
    [1, "John"],
    [2, "Alice"],
    [3, "Bob"]
  ];

  console.log(employees[0]);


  console.log("Printing whole tuple");
  for (let emp of employees) {
    console.log(emp[0], emp[1]);
  }
  