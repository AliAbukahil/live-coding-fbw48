const calcLifetimeSupply = (age, amountPerDay) => {
  let result = 0;
  let amountPerYear = amountPerDay * 365;
  let yearsToLive = 100 - age;
  result = amountPerDay * yearsToLive;

  return `The snack company should provide you with ${result} units, until you are a ripe old age of 100. Happy snacking!`;
};
console.log(calcLifetimeSupply(88, 3));
