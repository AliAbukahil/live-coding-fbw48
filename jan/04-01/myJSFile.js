console.log("Hazem");
// How to declare a Variable and a String and Boolean.
let x = 3;
let str = "Hamburg";
let old = true;
// Ternary Operator عامل ثلاثي
let kid = 18;
kid > 17
  ? console.log("Yes I can drive in the Valley of shadow")
  : console.log("No I can't drive in the Valley of shadow");
// How to run nodemon in the Terminal $ 1.nodemon 2.name of the file you want nodemon to execute.

// typeof
console.log(typeof x);
console.log(typeof old);
console.log(typeof str);
console.log(typeof kid);

// Length
//1. Length method counts as Humans from 1 to whatever, but the index method counts from 0 to Whatever, as mentioned down in the console.log Hazem firstName 0= the first letter H
let firstName = "Hazem";
console.log(firstName.length);
console.log(firstName[0]);

// you can access a variable that you have already declared with the same name you declared before (Just like in the Something Example)
let something = 12321;
something = 5589;
console.log(something);

// please note once you declare a const Variable you can't change the Value of it AGAIN like in (let). const is Short for constant which mean unchangeable!  مُسْتَقِرّ، لا يتغيَّر ولا يَتبدَّل
// in the line 35 (fatherName = "Amigo";) will not be executed and nodemon will collapse!

const fatherName = "Zain";
console.log(fatherName);
// fatherName = "Amigo";

// var is a global Variable which you can access anywhere in the file you are working on and let too until you put the let variable inside of a scope which is the lovely looking braces { } you can't access the same variable again, but the (var) variable name can be accessed outside of the lovely looking braces { } and inside of the braces { }. Example see line number 46 to 47.
var global = "Hi I Am Global!";
console.log(global);
{
  // this is a scope! نطاق, مدى, مجال
  let local = "Hi I Am Local!";
  global =
    "Hi I can be accessed again inside of this scope because I was made in the Global scope";
  console.log(local);
  var anywhereAccessMe =
    "look How cool I am! I can be consoled.logged outside of the scope {} even!, because I am a (Var) not (let)";
}
console.log(global);
console.log(anywhereAccessMe);

// hoisting // function
print("Mama");

function print(str) {
  // local Scope.
  console.log(str);
}

print(/* typeof */ "Hazem");
print(/* typeof */ 55);
print(/* typeof */ true);
print(/* typeof */ false);
// please Note that you can call the function name (Example (print please refer to line 53 "Mama")) before the declaration line of the Function and after  the declaration line of the function and you can call the name of the function outside of the scope which is the lovely looking braces {} and outside the braces too, this is ((Hoisting)) the dude who runs the lines two times! Functions are hoisted, Variables are hoisted, consts are hoisted too, anything else HELL No!

//console.log(lastName);
// please note in the line 66 this attempt is a total failure in the Terminal, because you can't console.log a (let) variable before you declare it and name it! Understood! but with the (var) variable it will be printed out in the Terminal even though the console.log method is initiated before the (var) declaration and naming, but note that it will be printed out as (undefined) in the Terminal unlike the (let) which will collapse the damn Terminal. please refer to line 68 til 71 for Example:
console.log(PrintedOutBeforeDeceleration);
var PrintedOutBeforeDeceleration =
  "I can be consoled.logged before my Deceleration, but I will show you in the Terminal (undefined)";
console.log(PrintedOutBeforeDeceleration); // here I can show you my true skin!
let lastName = "Abukahil";
console.log(lastName);

function sum(x, y) {
  let z = 0;
  z = x + y;
  return z;
  //console.log(z);
}
console.log(sum(2, 4));

let sumRe = sum(2, 44);
console.log(sumRe);

// four options to print number 5: they are all right, but not all are efficient يعني محترفة
//------- option 1
console.log(5);
//------- option 2
let num = 5;
console.log(num);
//------- option 3
let a = 2;
let b = 3;
console.log(a + b);
//-------option 4
console.log(3 - 2 - 4 + 2 + 6);

// substring

let oString = "Hi I am a String,I'm 1000 years old";
print(oString.length);
let str1 = oString.substring(5);
console.log(str1);
// please note that the (substring)method does count from the 0 and actually not similar to the length method where it starts counting from 1 to whatever just like the Humans count not like the index method which JavaScript uses when it is counting which is starting from the 0 to whatever.

let str2 = oString.substring(10, 16);
console.log(str2);
// please note that the substring method will cut from the beginning number which you add inside of the parenthesis () and if you desire to cut part of the String for Example in the middle then you gotta give the beginning && the end numbers inside the parenthesis () separating the two numbers with a coma, please refer to line 107 to get your head around it!

/// toUpperCase method
let str3 = oString.toUpperCase();
console.log(str3);
/// toLowerCase method
let str4 = oString.toLowerCase();
console.log(str4);

let firstName1 = "hAzEm";
// Hazem =>>> thats how it should be written!
let firstChr = firstName1[0].toUpperCase();
console.log(firstChr);
let restChr = firstName1.substring(1).toLowerCase();
console.log(restChr);
let finalFirstName = firstChr + restChr;
console.log(finalFirstName);

/// The short form
let shortForm =
  firstName[0].toUpperCase() + firstName.substring(1).toLowerCase();
console.log(shortForm);

// The includes Method
let longStr = "Hi this is me, I am Ali, I live in Hamburg";
let text = longStr.includes("hi");
let text2 = longStr.includes("@");
console.log(text);
console.log(text2);
// please not that the includes method is not a case sensitive letter and it is a true or false method and it is used to look for something in a string. for Example please refer to line 134 and you see that it is not a case sensitive too! and you can ask for a symbol for Example please refer to line 135. please note too that it only find the first thing in the string, so if we had two hi, hi it will only refer and find th first hi and ignore the secund hi!! so please be aware this method is not efficient.

///
let partOfStr = longStr.substring(4, 7);
console.log(partOfStr);
