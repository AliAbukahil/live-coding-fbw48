// var
let x = 3;
let str = "Berlin";
let old = true;

// ternary Option
let kid = 18;
kid > 16 ? console.log (" yes I can drive")
: console.log ("No My Mom will drive me");

// to lunch nodemon in command type nodemon name of the file for Example (index.js)

// typeof
console.log (typeof x)
console.log ( typeof str)
console.log ( typeof old)

// Length

let nickname = "Itachi"
console.log (nickname.length)
console.log ( nickname [0])

let something = 159951;
something = 753357;
console.log (something);
const fatherName = "Kareem";
console.log (fatherName);
var global = "Hi I am global"
console.log (global);

{
    let local = 22;
    global = "Hi"
    var localGlobal = "Hi It's me Global even though I'm inside two Curly Brackets,cuz var is always Global"
}
console.log (localGlobal);

 // functions 
function print (str){
    console.log (str);
}

print ("Itachi")
print (22);

var lastNme = "Abukahil";
console.log (lastNme);

function sum (x,y){
    let z = 0;
    z = x + y;
    //console.log (z);
    return z;
}
console.log(sum (2, 3));
let sumRe = sum(2,44);
console.log (sumRe);

/// ----- option 1
console.log(5);
/// ----- option 2
let num = 5;
console.log(num);
/// ----- option 3
let a = 2;
let b = 3;
console.log (a + b);
/// option 4
console.log (3-2-4+2+6);
/// substring
let oString = "Hallo My Name Is Kakashi, I'm 88 Years Old";
print(oString.length);
let str1 = oString.substring(6);
console.log (str1);
let str2 = oString.substring(6, 20);
console.log(str2);

///to UpperCase + to LowerCase
let str3 = oString.toUpperCase();
console.log(str3);

let str4 = oString.toLowerCase()
console.log (str4);

let firstName = "kAkAsHi";
// Kakashi
let firstChr = firstName[0].toUpperCase();
console.log (firstChr);
let restChr = firstName.substring(1).toLowerCase();
console.log (restChr);
let  finalFirstNme = firstChr + restChr;
console.log (finalFirstNme);
/*

This is Many lines comment

*/

// camelCase vs snake_case

//
let longStr = "Hi this is me in the, I'm in the Jungle, PLZ Help S0S"
// includes 
let text = longStr.includes("Hi");
let text2 = longStr.includes("@");
console.log(text);
console.log (text2);

//
let partOfStr = longStr.substring(4, 7);
console.log (partOfStr);
