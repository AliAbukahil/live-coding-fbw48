console.log("Good Morning");
// 1st way
const arr1 = [];
arr1.push("Hi");
console.log(arr1);

// new Array
const arr3 = new Array(55, 88, 99, 66, "hi", "Hello", "paga");
console.log(arr3);

//, of
let newArr = Array.of(1, 44, 55, 6);
console.log(newArr);
// . sort()
let alpha = ["c", "h", "y", "l", "8", "4"];
let newSortedAlpha = alpha.sort();
console.log(newSortedAlpha);

//... reverse ()

let insane = ["22", "44", "8", "79"];
let crazy = insane.reverse();
console.log(crazy);

let crazyLetters = ["A", "B", "C", "D", "E"];
console.log(crazyLetters.reverse());

// .isArray()
// true or false

let bool = Array.isArray([]);
console.log(bool);

// . lastIndexOf()
const arr4 = ["go", "We", "home", "you", "You", "we", "Iam", ""];
console.log(arr4.lastIndexOf("go"));
console.log(arr4.lastIndexOf("You"));
console.log(arr4.indexOf("go"));
console.log(arr4.lastIndexOf(""));
// . fill()
// (what, from, to ) => (2,3,3,)

let arr5 = [55, 66, 33, 33, 99, 88, "moo"];
let newArr5 = arr5.fill(0, 1, 88, 44);
console.log(newArr5);
