// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example:
//  [ { tile: “N”, score: 1 },
//    { tile: “K”, score: 5 },
//    { tile: “Z”, score: 10 },
//    { tile: “X”, score: 8 },
//    { tile: “D”, score: 2 },
//    { tile: “A”, score: 1 },
//    { tile: “E”, score: 1 } ]

const arrSore = [
  { tile: "N", score: 1 },
  { tile: "K", score: 1 },
  { tile: "Z", score: 1 },
  { tile: "X", score: 1 },
  { tile: "D", score: 1 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

arrSore.reduce(function (acc, obj) {
  return acc + obj.x;
}, 0);
console.log(arrSore);

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:

// Expected Output:
// {“John”: name, “teacher”: job}
/* const newPerson = {};
newPerson["John"] = "name";
newPerson["teacher"] = "job";
console.log(newPerson); */

let person = {
  name: "John",
  job: "teacher",
};

const newPerson1 = {};

Object.entries(person).forEach((entry) => {
  let key = entry[0];
  let value = entry[1];
  newPerson1[value] = key;
});
console.log(newPerson1);
// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [[“a”, “b”, “c”], [1, 2, 3]]
// {key: true} ➞ [[“key”], [true]]
