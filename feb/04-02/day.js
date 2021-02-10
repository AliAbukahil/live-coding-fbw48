let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (let pet in pets) {
  console.log(pet); // "species"
}

for (let pet of pets) {
  console.log(pet); // "Cat", "Dog", "Hamster"
}

var cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"],
};
console.log(cat.enemies.push("Rats"));
console.log(cat);

let dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle",
};
let myDog = "Hunter";
let myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"

var someObj = {
  propName: "John",
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"

var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};

console.log(ourDog);
ourDog.name = "Happy Camper";
console.log(ourDog);
ourDog["name"] = "Happy Camper";
console.log(ourDog);

var myDog0 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog0.bark = "woof";
console.log(myDog0);

var myObj = {
  top: "hat",
  bottom: "pants",
};
console.log(myObj.hasOwnProperty("top")); // true
console.log(myObj.hasOwnProperty("middle")); // false

var ourMusic = [
  {
    artist: "Daft Punk",
    title: "Homework",
    release_year: 1997,
    formats: ["CD", "Cassette", "LP"],
    gold: true,
  },
];
console.log(ourMusic);

var myStorage = {
  car: {
    inside: { "glove box": "maps", "passenger seat": "crumbs" },
    outside: { trunk: "jack" },
  },
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

console.log(myStorage);

// Setup
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line
console.log(secondTree);

// The push()
//method adds one or more elements to the end of an array and returns the new length of the array.

const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push("chickens", "cats", "dogs");
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

let sports = ["soccer", "baseball"];
let total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4

/* Merging two arrays
This example uses apply() to push all elements from a second array.

Do not use this method if the second array (moreVegs in the example) is very large because the maximum number of parameters that one function can take is limited in practice. See apply() for more details. */

let vegetables = ["parsnip", "potato"];
let moreVegs = ["celery", "beetroot"];

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot')
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']

/* The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
 */

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
const secondElement = array1.push("potato", "hearts");
console.log(array1);

// While Loops
var ourArray = [];
var i = 0;
while (i <= 5) {
  ourArray.push(i);
  i++;
}
console.log(ourArray);

/////////////////////
var myArray = [];
var i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray);

for (
  var i = 0;
  i < 5;
  i++
) {} /* There are 3 parts here
There are three parts to for loop. They are separated by semicolons.

The initialization: var i = 0; - This code runs only once at the start of the loop. It’s usually used to declare the counter variable (with var) and initialize the counter (in this case it is set to 0).

The condition: i < 5; - The loop will run as long as this is true. That means that as soon as i is equal to 5, the loop will stop looping. Note that the inside of the loop will never see i as 5 because it will stop before then. If this condition is initially false, the loop will never execute.

The increment: i++ - This code is run at the end of each loop. It’s usually a simple increment (++ operator), but can really be any expression. It is used to move the counter (i) forward (or backwards, or whatever).
 */

var myArray = [];
for (var i = 0; i <= 15; i++) {
  myArray.push(i);
}
console.log(myArray);

var ourArray = [];
for (var i = 0; i < 60; i += 5) {
  ourArray.push(i);
}
console.log(ourArray);

var arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
///////////////////////
// this one is similar to the one down
var ourArray2 = [];
var i = 0;
do {
  ourArray2.push(i);
  i++;
} while (i < 5);
console.log(ourArray2);
//////////////////////////////
/* Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total. */
// Setup
var myArr = [0, 1, 2, 3, 4];

// Only change code below this line
var total1 = 0;
for (var i = 0; i < myArr.length; i++) {
  total1 += myArr[i];
}
console.log(myArr);
////////////////////
/* In this example, we initialize the value of ourArray to an empty array and the value of i to 5. When we execute the while loop, the condition evaluates to false because i is not less than 5, so we do not execute the code inside the loop. The result is that ourArray will end up with no values added to it, and it will still look like [] */

var ourArray3 = [];
var i = 5; //<== the variable here is set to 5
while (i < 5) {
  // <== and the i here is NOT less than 5
  ourArray3.push(i);
  i++;
}
console.log(ourArray3);
//////////////////////
//Now, take a look at a do...while loop:

var ourArray = [];
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
console.log(ourArray);
/* In this case, we initialize the value of i to 5, just like we did with the while loop. When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it. We will add a single element to the array and then increment i before we get to the condition check. When we finally evaluate the condition i < 5 on the last line, we see that i is now 6, which fails the conditional check, so we exit the loop and are done. At the end of the above example, the value of ourArray is [5]. Essentially, a do...while loop ensures that the code inside the loop will run at least once. Let's try getting a do...while loop to work by pushing values to an array.
 */

/* Do...While loops makes sure that the code is executed at least once, and after the execution, if the condition inside the while() is true, it continues with the loop, otherwise it stop.
 */

/////////////////////
