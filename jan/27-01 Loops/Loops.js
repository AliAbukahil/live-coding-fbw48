// understanding loops alone!
/* for (let i = 0; i < 5; i++) {
  console.log("Loops" + i);
  if (i === 3) break;
} */

// UUnderstanding Loops with Arrays!!!!
/* const names = ["john", "bob", "mary", "joe", "julie ", "natalie "];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
  if (i === 5) break;
} */

// for of Loop ; third way of making loops!
const names = ["john", "bob", "mary", "joe", "julie ", "natalie "];

for (name of names) {
  console.log(name);
} // please note here you don't need the curly brackets in this loops. you can delete them and loop will still work! And you can still have them too and the loop will work!

// Here we have objects in a const!
const user = { firstName: "John", lastName: "Doe" };
for (key in user) console.log(user[key]); // please note in line 24 since we have a short line of coding we don't need a Curly brackets!

// the while loop:

/* let i = 0;
while (i < 10) {
  i++; // please note the 30 if you increment the i++ with in the loop or then this loop would become an infinite loop and that would lock up the the terminal or the browser depending on where you are console logging your codes, so it is a crucial thing to add the i++ and what the i++ basically indicates to i += 1 or an easier way to write this is the i++
  if (i === 5) continue;
  console.log(i);
} */

// Now The do while loop, similar to the while loop:
/* let i = 0;
do {
  i++;
  if (i === 5) continue;
  console.log(i);
} while (i < 0); */
// The difference Method here is the do statement will always run the the first time, it checks for the condition after the do statement has run, so if we say i is less than zero not 10 as is showing in the line 41 and we save this and run on the Terminal you will see it does print 1 even though 1 is not less than zero, so it run the block of line codes (38,39,40) and then it checked and since the statement was false it didn't run the code again.

// The last loop: for each high order array function;

const animals = ["cat", "dog", "horse", "sheep", "bird"];

animals.forEach((animal) => {
  console.log(animal);
});

// please note that when it comes to looping through arrays forEach function is what you should always use!

console.log(
  "That is it for all the loops that there out there! Happy looping!"
);
