console.log("Good Morning");

function main(num1, num2) {
  // outer function
  function second(n) {
    //inner function
    return n * n;
  } //
  return second(num1) + second(num2);
}

console.log(main(3, 4));

const add2 = (a) => {
  return (b) => {
    return a * b;
  };
};
console.log(add2(2)(4));

/* Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:
The current age of the person // e.g. 40
The retirement age of the person // e.g. 60
The monthly wage the person earns // e.g. 1000
The percentage (as integer) that the person saves each month // e.g. 10%
If the person has already retired then the message ‘You’re already retired!’ should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
Output: $30000 */
const retirement = (() => {
  let currentAge = 0;
  let retirementAge = 0;
  let monthlyWage = 0;
  let percentage = 0;
  return () => {
    return currentAge;
  };
})();

console.log(retirement());
console.log(retirement());

function retireCalc(currentAge, retAge, monthWage, savingPerMonth) {
  let yearsLeft = retAge - currentAge;
  let monthLeft = yearsLeft * 12;
  let monthSafe = (monthWage / 100) * savingPerMonth;
  if (currentAge >= 65) {
    return "You're already retired!";
  } else {
    return monthSafe * monthLeft;
  }
}
console.log(retireCalc(40, 65, 2000, 5));
