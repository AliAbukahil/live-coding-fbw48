console.log(x);
var x;
x = true;
// console.log(a);
// var x;
// a = null;
// b = 0;
// z = undefined; // please note that you can assign (undefined) to a variable!
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof undefined);

// // please note (null) is different from (0), (0) is a value, it is a number, but (null) with the letters is something else, it is a value too but meaning it is Empty! on the Other hand undefined is no value at all just an empty box!

// function sum(x, y) {
//   return x + y;
// }

console.log("What's up");

1 === 1 ? console.log("cool") : console.log("not cool");

// bracket notation [0]
let str = "AMIGOS";
console.log(str[str.length - 1]);

/// .trim()
let longStr = "           Hi I am Ali        ";
console.log(longStr.trim());

function display(str) {
  console.log(str);
}
display(null);
// please note in this function there is the two parameters (str) inside these parameters doesn't have to be a String only, you can have any data type such as boolean or numbers on null too.

// Numbers
let m = 3;
let h = 44;
console.log(m % h);
// please note the percentage % here is something different, (It will give you the remainder of the division ) for Example it will take 3 and divide it bei 44 and give the result of the remainder from that division.

let integer = "122"; // عدد صحيح
let integer1 = "1.5";
console.log(integer + " " + integer1);

isNaN(integer) ? console.log("It is a not number!") : console.log("A NUMBER!");
// isNaN is a Method in JavaScript to check if it is not a number! ===>>> meaning It (is not a number)!

let intSum = integer + integer1;
console.log(intSum);

// parseInt() Method!
let newNum = parseInt(integer, 10);
console.log(newNum);

intSum = newNum + integer1;
console.log(intSum);

///parseFloat
let newFloat = parseFloat(integer1);
console.log(newFloat);

//1. Create two variables.
// One variable should contain a string value and
//the other should contain a number. Concatenate the string and the number.
let str1 = "This is a string";
let int101 = 22;
let longStr1 = str1 + int101;
console.log(longStr1);

//2. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
//(33, 40, 2,1,22)

let numb = 22;
let numX = numb % 2;
console.log(numX);
console.log(numX == 0 ? `${numb} is even` : `${numb} is odd`);

function oddOrEven(num) {
  return num % 2 === 0 ? "even" : "odd";
}
console.log(oddOrEven(33));
console.log(oddOrEven(40));
console.log(oddOrEven(2));
console.log(oddOrEven(1));
console.log(oddOrEven(22));

// We have learned here some basic math * + - //
let a = 3;
let b = 2;
let sum1 = a + b;
let div = a / b;
let mul = a * b;
let sub = a - b;
console.log(sum1, div, mul, sub);

// ++ --
++a;
b--;
// **
let power = 2 ** 2;
console.log(power);
// Math.floor() is a rounding down a number Method by JavaScript! See Example number 1.8 in the variable let float1 and how it round it down to the lowermost possible number which is 1 which is going to be printed out in the Terminal.

let float1 = 1.8;
let realInt = Math.floor(float1);
console.log(realInt);

//Math.ceil() is an opposite Method by JavaScript to its brother Math.floor which brings the number up high in the sky and the floor method down, down on the floor! LOL!

let realInt2 = Math.ceil(float1);
console.log(realInt2);

// Math.min()
// Math.max()
// there are two Methods if you wanna grab a smaller number of a group of numbers or if you wanna grab a bigger number of a group of numbers!
console.log(Math.max(2, 33, 434, 643, 123211, -212));
console.log(Math.min(-55, -66, 55, +66, 33));
