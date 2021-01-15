/* const calcLifetimeSupply = (age, amountPerDay) => {
  let result = 0;
  let amountPerYear = amountPerDay * 365;
  let yearsToLive = 100 - age;
  result = amountPerDay * yearsToLive;

  return `The snack company should provide you with ${result} units, until you are a ripe old age of 100. Happy snacking!`;
};
console.log(calcLifetimeSupply(88, 3));
 */
function functionName() {
  console.log("Hi World");
}
functionName();

function reusableFunction() {
  console.log("Where is the Boogeyman?");
}
reusableFunction();

/* Basic JavaScript: Passing Values to Functions with Arguments
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

Here is a function with two parameters, param1 and param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Then we can call testFun: testFun("Hello", "World"); We have passed two arguments, "Hello" and "World". Inside the function, param1 will equal "Hello" and param2 will equal "World". Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments. */

function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(55, 88);

/* Basic JavaScript: Global Scope and Functions

In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var.

Using var, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var keyword. */

// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
  // Assign 5 to oopsGlobal Here
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

/* Basic JavaScript: Local Scope and Functions
Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.

Here is a function myTest with a local variable called loc. */

/* function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined
loc is not defined outside of the function. */
