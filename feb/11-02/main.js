/* function Person(name, age, act) {
  this.name = name;
  this.age = age;
  this.act = act;
  this.printout = function () {
    console.log(
      `Hey${this.name}, you are too old ${this.age} and you do ${this.act}`
    );
  };
}
let zain = new Person("Zain", (21)["sleep"]);
zain.printout();
const olga = Person("olga", 40, "no thing");
olga.printout();
 */

// for of arr

/* let family = [["Zain", 22, "teacher"][("Olga", 40, "chef")]];
for (let i = 0; i < family[i].length; i++) {
  console.log(family[i][j]);
}
 */

// Creat a constructor function that receive product details (productName,prise,inventory) thin build a method to display this data in clear outputted form
// build two product using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling prise 2.33€. we have 2232 in our store

function ProductDetails(productName, prise, inventory) {
  this.productName = productName;
  this.prise = prise;
  this.inventory = inventory;
  this.printOut = function () {
    console.log(
      `Haj, my name is ${this.productName}, I cost not too much ${this.prise} and I still have in inventory ${this.inventory}`
    );
  };
}
const _firstProduct = new ProductDetails("Pepsi", 2.33, 2232);
_firstProduct.printOut();

/* The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.   */
const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

///////////////////////////////

class Tv {
  constructor(_brand, _channel = 1, _volume = 10) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }
  incVolume() {
    if (this.volume);
  }
  decVolume() {}
  rest() {
    // volume and channel
  }
}
