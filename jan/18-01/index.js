// loops

for (let i = 0; i < 5; i++) {
  console.log("Hi");
}

for (let i = 0; i < 5; i += 2) {
  console.log("i");
}

for (let i = 0; i < 5; i++) {
  console.log("Hi");
}

for (let i = 0; i < 5; ) {
  console.log("bye");

  i++;
}

for (let i = 0; i < 5; ) {
  console.log("bye");

  i++;
}

for (let i = 0; i < 5; i++) {
  if (i <= 1) {
    console.log(`there is ${i} star in the sky`);
  } else {
    console.log(`this is ${i} star in the sky`);
  }
}

for (let i = 5; i > 0; i--) {
  console.log(`i is now $(i)`);
}

for (let i = 1; i <= 10; i++) {
  console.log(`4 * ${i} = ${i * 4}`);
}

for (let i = 1; i <= 10; i++) {
  console.log(`this is a Multi table for ${i}`);
  for (let j = 1; j < 10; j++) console.log(`${i} * ${j} = ${i * j}`);
}

for (let i = 1; i <= 12; i++) {
  console.log(`this is a Multi table for ${i}`);
  for (let j = 1; j < 10; j++) console.log(`${i} * ${j} = ${i * j}`);
}

for (i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i % 2 == 0 ? ` ${i} is even` : "");
  }
}

let drawShape = "";
for (let i = 0; i <= 4; i++) {
  for (let j = 0; j <= i; j++) {
    drawShape += "*";
  }
  console.log(drawShape);
  drawShape = "";
}

const names = ["kakashi", "ithchai", "kafier"];
const work = ["doc", "tech", "It"];
for (let i = 0; i < names.length; i++) {
  console.log(`hi I am ${names[i]}, I will a be ${work[i]} `);
}

/* const images = ["cool", "nerd", "conf"];
const likes = [ 555, 444, 888,];
for (let) */

/* let markHeight = "Body Mass Index)";
let johnHeight = "Body Mass Index)";
console.log("markHeight");
let checkM = "";
let checkJ = "";

let firstName = "mary";
let age = "55";

const  */

let color = "red";
switch (color) {
  case "blue":
    console.log("nice this blue");
    break;
  case "white":
    console.log("nice this white");
    break;
  case "black":
    console.log("nice this black");
    break;
  default:
    console.log("Sorry you have to enter a color end of story");
}

let userKidsNumber = 5;
switch (userKidsNumber) {
  case 1:
    console.log("you are the man");
    break;
  case 2:
    console.log("you are the sec man");
    break;
  case 3:
  case 5:
  case 6:
    console.log("you have many kids nice");
    break;
  default:
}

/* Capitalize. 
Create a program that capitalizes the first letter of each element in an array of names. Examples:
[“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
[“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
[“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]
City Names. 
Create an array of city names. Loop through the array and add the city names to a string. Examples:
[Berlin, Paris, Prague, Rome] ➞ expected output: “Berlin, Paris, Prague, Rome”.
Hello
 Create an array filled with your friends’ or family’s names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array. Examples:
[Maria, Mike, Paul, Doven] ➞ expected output: “Hello Maria! Hello Mike! Hello Paul! Hello Doven!”
Bonus [Susan, Rezvane, Mark] ➞ expected bonus output: “Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Mark is at index 2 of my friends and family array”.
Odds and Evens. 
Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
[6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
 */
