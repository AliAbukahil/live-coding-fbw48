const userPrint = (name, add, age) => {
  console.log(`Hi ${name}, your age ${age} your address is ${add}.`);
};
userPrint("Ali", "Hamburg", 44);

/* Write a function that it returns  “Two for me and one for you” when no arguments are passed
e.g
console.log(twofer("Fran")) ---> "Two for me and one for Fran"
console.log(twofer()) ---> "Two for me and one for you" */

/* const twofer = (noArgsPassed) => {
  let num = 0;
  console.log(twofer("Fran"));
  console.log(twofer());
  return noArgsPassed;
};
twofer("Two for me and one for Fran");
twofer("Two for me and one for you"); */
const twofer = (who = "you") => `Two for me and one for ${who}`;
console.log(twofer("Zain"));
console.log();
//I will get my Head around these challenges!

/* Write a function  that it still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.
e.g
console.log(exponent(3, 3)) ---> 27
console.log(exponent(3)) ---> 9 */

/* const calculator = (num) => {
  let num = 0;
  let result = null;
  for (let i = 0; i < result.length; i++) {
    return;
  }
};
console.log(exponent(3, 3));
console.log(exponent(3));
 */
const exponent = (num, exp = 2) => num ** exp;
console.log(exponent(3));

const exponent2 = (num, exp = 2) => Math.pow(num, exp);
console.log(exponent2(3));

const exponent3 = (num, exp = 2) => {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    // 1 = 1 * 3
    // 3 * 3
    result *= num;
  }
  return result;
};
console.log(exponent3(3));
/* Write a function which accepts any amount of numbers and return the sum of their addition
e.g
console.log(sum(1)) ---> 1
console.log(sum(1, 15)) ---> 16
console.log(sum(25, 25, 20)) ---> 70 */

const sum2 = (...args) => {
  let result = 0;

  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
};
console.log(sum2(25, 25, 20));

// .maps
const books = ["One Day", "One more things", "Done by me"];

const printBook = books.map((item, index) => `${index}. title ${item}`);
console.log(printBook);
console.log(books);
