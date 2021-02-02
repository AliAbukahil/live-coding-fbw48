// A Regular Function()
function message(params) {
  return "where is the Boogeyman?";
}
console.log(message());

// An Arrow Function =>
const message1 = () => {
  return "Where is the Boogeyman?";
};
console.log(message1());

//So if we have let's say just one line in an Arrow Function and we are just returning one String, we have the Advantage to get rid of the curly bracket and (return) key like this:
const message2 = () => "Where is the Boogeyman?"; // so this implicitly returning whatever wre put after the arrow ok!.
console.log(message2());

// Argument in a Function (arg) the same as A Regular Function ()
function message3(arg) {
  return `Hello ${arg}`;
}
console.log(message3("Natasha")); // let's turn this old ugly Function into the Arrow Function: see line 23 + 24.

const message4 = (arg) => `Hello ${arg}`;
console.log(message4("Natasha")); // Now How about we make Natasha Hello Function more thinner and sexier: since we are only passing one value we actually don't have to have the parentheses here: see line 26 + 27.

const message5 = (arg) => `Hello you Sexy ${arg}!`;
console.log(message5("Natasha")); // Voilà Thinner and Sexier! PLEASE NOTE THE prettier extension is adding the two parenthesis to the (arg) again when you hit control S, so No worries if you delete them the Function would still work Smoothly!. and if you are passing two arguments, so let's say a, b in this case you GOTTA have the two parenthesis surrounding them like this (a, b) see line 29 + 30.

const message6 = (arg1, arg2) => `${arg1} ${arg2}`;
console.log(message6("Hello", "Natasha!")); // So those first examples we were converting named Functions into arrow functions and in the next one we're going to convert an anonymous function into an arrow function, see line 32 + 33 + 34.

/* document.addEventListener("click", function () {
  console.log("click");
}); */

// so in order to convert this Regular Function() to arrow function all we have to do is delete the function name + the curly brackets since it is only one line we don't need the curly brackets and don't forget to add the arrow after the parenthesis like this: document.addEventListener("click",  () => console.log("click"));

const people = [
  {
    fName: "John",
    lName: "Smith",
  },
  {
    fName: "Mary",
    lName: "Clak",
  },
];

console.log(
  // The Regular Function()
  people.map(function (person) {
    return person.fName;
  })
);
console.log(people.map((person) => person.lName)); // the one line arrow Function! Cooler looking function right!

//Before!
/* let demo = function () {
  console.log(this);
};

window.addEventListener("load", demo);

document.getElementById("btn").addEventListener("click", demo); */

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Object yourPersonObj. Create an object named person2. Loop through the object and print both the property and value of the object.

const person2 = {
  name: "Ali",
  age: 34,
  gender: "Male",
  print: function () {
    console.log(
      `I am ${this.name}, my age is ${this.age}, Gender is ${this.gender}`
    );
  },
};
person2.print();

/* Get Values. Create a function that returns an array of all values of an object’s properties.
Examples:
getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})
Expected output:
["tea", "coffee", "milk"] 

 */
const getValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
  print: function () {
    console.log(`${this.choice1}, ${this.choice2}, ${this.choice3}`);
  },
};
getValues.print();

/* List Properties. Create a function that returns an array of properties of a javascript object.
Example
let student = {
  name: "Mike", 
  class: "4A" 
  course: "English"
}
Expected output:
["name", "class", "course"] */
