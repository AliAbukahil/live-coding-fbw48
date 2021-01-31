console.log("How do you do in the Valley of Voo!");

let x, y, z;
console.log(x);
x = 4;
y = 5;
z = x + y;
console.log(Math.max(3, 5, 2, x, y, 100));
console.log(Math.min(x, y, z)); // Please Note here that you can call the Math.max/min with variables that have letters and have already been declared! so in line 9 the x,y,z letters have already been have already been assigned to numbers.
let str = "20.4";
let strIntoNum = parseInt(str, 10); // always use pls

// Decimal Numbers  0,1,2,3,4,5,6,7,8,9 ==>> Base number is 10 أرقام عشرية

// Hexadecimal Numbers 0,1,2,3,4,6,7,8,9,A,B,C,D,E,F ==> Base Number is 16 أرقام سداسية عشرية

// Binary Numbers 0,1 Base Number is ==> 2 only two digits الأعداد الثنائية

console.log("parseInt", strIntoNum);
let strIntoNum1 = +str; // never use! Bad syntax! it is not printing out even!! I don't why!
console.log("+str", strIntoNum1);

let strIntoNum2 = str * 1; // we don't use!
console.log("*1 =", strIntoNum2);

let strIntFloat = parseFloat(str);
//
console.log("parseFloat", strIntFloat);
console.log(((x + y) / (z + 2.44)) * 29 + x);
//
// Number + String
let d, f, r;
d = "H";
f = 33;
console.log(d + f);

// NUmbers + Boolean
r = true; // please note (true) in Boolean data is 1 and (False) is 0
console.log(f + r); // 33 + 1 = 34

// Combining String + String

let str1 = "Amigos";
let str2 = " Tacos";
console.log(str1 + str2);

// ++ -- the Increment and the decrement
let a = 4;
console.log(a++);
console.log(a);

let q = 8;
console.log(q--);
console.log(q);

console.log(typeof str);
console.log(typeof x);
// console.log(typeof console);
console.log(typeof console.log);
console.log(typeof Math.ceil);

let floatNum1 = 0.1;
let floatNum2 = 0.2;
let result = floatNum1 * floatNum2;
console.log(result);
// toFixed()
let num = 4;
console.log(result.toFixed(3));

//1 Math.min
console.log(Math.min(-1, 0, 1, 2, 3, 4));

//2 Math.max
console.log(Math.max(-1, 0, 1, 2, 3, 4));

//3 Math.ceil Round.up
function roundUp(num) {
  let result = Math.ceil(num);
  console.log(result);
}
roundUp(225631465.555555);
roundUp(455358967523.454165415325);
roundUp(5465465.5646465);
//4 Math.floor Round down
function roundDown(num) {
  let result = Math.floor(num);
  console.log(result);
}
roundDown(225631465.555555);
roundDown(455358967523.454165415325);
roundDown(5465465.5646465);

// concatenation
// 1 The `+` and the backtick `` the  operator is concatenating the String and the number.
let introSent = "Hi, my name is Nancy";
let age = 25;
console.log(introSent + " " + age);
console.log(`${introSent} ${age}`);

// 2 parseInt && parseFloat, they take a String an convert to a number! parseInt takes the Numbers after the (.) and throw them the F away! parseFloat the other way around! It Keeps the number after the (.) and doesn't throw them the F away!
// Teacher Example:
let integer = "1005";
console.log(parseInt(integer));
let float = "10.05";
console.log(parseFloat(float));

// another Example:
{
  let k = 5;
  let m = "10";
  let mInt = Number.parseInt(m);
  console.log(k + mInt);
}

{
  let s = 5;
  let d = "1012.55458658 Tacos Amigos cost!";
  let dInt = Number.parseFloat(d);
  console.log(s + dInt);
}

/* {
  var input = prompt("Put in a number yo");
  console.log("Decimal        :", input);
  console.log("Binary         :", Number.parseInt(input, 2));
  console.log("Octal          :", Number.parseInt(input, 8));
  console.log("Hexa           :", Number.parseInt(input, 16));
}
 */

// Math.random
console.log(Math.floor(Math.random() * 10) + 1); // Math.random gives a new number every time you hit control save and Math.random has a comma/point in its structure and numbers after the comma/point and you can multiply that number and you can throw the numbers after the comma/point with many methods such as math floor/ceil/float as shown in line 132 and if you want to get a range of numbers between 1 to 10 you add the +1 to get the 10 number in your random range of NUmbers
