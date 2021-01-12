// assignments 1

function Num(x, y) {
  return x + y;
}
let bool = " ";
bool ? console.log("true") : console.log("false");

// assignments 2

function dogYears(str) {
  console.log(str);
}

// assignments 3
function add(first, second) {
  return first + second;
}

var sum = (1, 9);

function greet(name) {
  console.log("Hello " + name);
}

greet("Moo");

let a = 3;
let b = 2;
let sum1 = a + b;
let div = a / b;
let mul = a * b;
let sub = a - b;
console.log(sum1, div, mul, sub);

// assignment 7
x = sumAll(1, 12, 123, 1234, 12345);

function sumAll() {
  let i;
  let sum = 0;
  for (let i = 0; i <= 5; i++) {
    sum += arguments[i];
  }
  return sum;
}
