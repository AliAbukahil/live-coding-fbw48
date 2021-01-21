let text = "I love Coder Ali AbuKahil";
text = text.toUpperCase();
console.log(text);
text = text.toLowerCase();
console.log(text);
text;

let firstName = "Coder";
let lastName = " Abukahil";
let name1 = firstName + lastName.concat();
console.log(name1);

let text1 = "I hate Lockdown 2.0";
text1 = text1.toUpperCase();
console.log(text1);
text1 = text1.toLowerCase();
console.log(text1);

let firstPara = "   As I walk through the valley of The Shadows";

let secondPara = ", I shall fear no evil";

let thirdPara = ", because Allah is my shepherd!    ";

let theGathering = firstPara + secondPara + thirdPara.concat();
console.log(theGathering);

theGathering = theGathering.trim();
console.log(theGathering);

let index = thirdPara.charAt(10);
console.log(index);

let somText = "Have you seen the boogeyman? ";
let length = somText.length;
console.log(somText + " " + length);

let indexOf = somText.indexOf("boogeyman");
console.log(indexOf);

indexOf = somText.indexOf("Have");
console.log(indexOf);

indexOf = somText.indexOf("seen");
console.log(indexOf);

indexOf = somText.indexOf("u");
console.log(indexOf);

indexOf = somText.indexOf("Natasha");
console.log(indexOf);

let somText3 = ["Where", "is", "The", "Wizard", "of", "Oz", "?"];

somText3 = somText3.lastIndexOf("Oz");
console.log(somText3);

let search = somText.search("seen");
console.log(search);

let startWith = somText.startsWith("Have");
console.log(startWith);

startWith = somText.endsWith("?");
console.log(startWith);
