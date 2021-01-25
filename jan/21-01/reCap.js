/* Recap

You can create strings with " or '.
.length is a property that gives you the length of a string
.includes(searchString) returns true or false based on whether the searchString was found or not.
.toUpperCase() is a function that converts the string to upper case
.toLowerCase() is a function that converts the string to lower case
parentheses () on functions are required. .length is a property which is already pre-computed thus why it does not need parentheses
console.log(...) is used for debugging and is NOT a replacement for return. */

const text = "Hello World";

text.toUpperCase();
////////////////////

const text = "Code to go has awesome use cases!";

text.includes("Code to go");
//////////////////////

const text = "Hello World";

text.toLowerCase();
////////////////////

const text = "Hello World";

text.toLowerCase();
///////////////

/**
 * @param {string} name
 */
function getNameLength(name) {
  return name.length;
}

//sample usage
console.log(getNameLength("John"));
console.log(getNameLength("Argentina!"));
console.log(getNameLength("Macedonia"));
///////////////////////////////////

/**
 * @param {string} name
 */
function nameInUpperCase(name) {
  return name.toUpperCase();
}

//sample usage
console.log(nameInUpperCase("Jennifer"));
console.log(nameInUpperCase("Diego"));

///////////////////////////

/**
 * @param {string} name
 */
function nameInLowerCase(name) {
  return name.toLowerCase();
}

//sample usage
console.log(nameInLowerCase("Jennifer"));
console.log(nameInLowerCase("Diego"));

////////////////////////

/**
 * @param {string} name
 */
function getFirstCharacter(name) {
  return name[0];
}

//sample usage
console.log(getFirstCharacter("Blane"));
console.log(getFirstCharacter("Amsterdam"));

///////////////

/**
 * @param {string} name
 */
function getLastCharacter(name) {
  return name[name.length - 1];
}

//sample usage
console.log(getLastCharacter("John"));
console.log(getLastCharacter("Jennifer"));

///////////////////

/* Recap
A substring is a part or a portion of a string.

string.substring(indexStart, indexEnd) is used to return a portion of the string.

indexStart: the position of the first character you'd like to include.

indexEnd: the position of the first character you'd like to ignore.

the indexEnd argument is optional which means you can leave it out.
 */

/**
  * Skip first character
Complete the function skipFirstCharacter such that it returns all the characters except the first one of the name it receives.
 * @param {string} name
 */
function skipFirstCharacter(name) {
  return name.substring(1);
}

//sample usage
console.log(skipFirstCharacter("Iamsterdam"));

///////////////////

function double(number) {
  return number * 2;
}

/* A lot is going on in this example, for now here's what you have to know:

number is a variable.
in fact, number is a special kind of variable called a parameter, but we'll discuss that later on.
In terms of syntax, there are 4 new things in this example:

The function keyword
The parentheses ()
The curly braces {}
The return keyword 

The function keyword
The function keyword is used to define a function. This allows you to group related code logic together to make a reusable task. More on that later on.

The return keyword
As you can see, the last line of that function is return.
This is an important keyword. return is used to give the result of the function.

Let's take an example in English:

What is the result of doubling 4?
The result is 8
By having return number * 2 you're saying that the result of the double function is: number * 2 which in this example would be 8.

We will dive deeper into how return works in the next few chapters, for now, remember that most functions will need to give the result of the computation by having a return at the end.

Note that the return keyword can only be used inside a function.


*/

/* Plus sign
Last updated August 2019
In JavaScript, the plus sign (+) will behave differently based on the types of the variables you use it with.

You've already seen that 1 + 3 will return the number 4.

However, you could also use the + to concatenate 2 strings together, which means merge them together into 1 string.

Here's an example: */

"Hello" + "World"; //"HelloWorld"

///// `THE backtick`

/* String interpolation
Complete the function sayHello such that it interpolates the variable name into a string "Hello name".
Consider Learn Programming if you're stuck. */

/**
 {string} name
 */
function sayHello(name) {
  return `Hello ${name}`;
}

//sample usage
console.log(sayHello("John"));
