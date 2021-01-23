// Logical Operators

//1 && and
//2 || or
//3 !  not

let a = true;
let b = false;

if (a == true && b == false) {
  // alert ("Condition has been verified");
} else {
  // alert ("Condition has not been verified");
}

// Switch statements :

let fruit = "Orange";
switch (fruit) {
  case "Banana":
    console.log("Banana Price 1$");
    break;
  case "Apple":
    console.log("Apple Price is 2,99$");
    break;
  case "Strawberries":
    console.log("1 Box Strawberries costs 5,99$");
    break;
  default:
    console.log("Sorry We Don't Have This Kind Of Fruit!");
    break;
}

// While loop

/* let count = 1;
while (count <= 21) {
  document.getElementById("while-loop").innerHTML +=
    "Student: " + count + "<br>";
  ++count;
} */

/* let id2 = ["Name: IronMan", " || ", "Age: 45", " || ", "Country: USA"];
for (let count = 0; count < id2.length; count++) {
  document.getElementById("while-test").innerHTML += id2[count]+ "<br>";
} */

/* for (let count = 5; count <= 10; ++count) {
  document.getElementById("while-loop").innerHTML +=
    "Student: " + count + "<br>";
} */
let i = 0;

while (i <= 10) {
  if (i == 8) {
    break;
  }
  console.log("ID: " + i);
  ++i;
}
