for (var x = 0; x <= 20; x++) {
  if (x === 0) {
    console.log(x + " is even");
  } else if (x % 2 === 0) {
    console.log(x + " is even");
  } else {
    console.log(x + " is odd");
  }
}

let myList = ["apples", "oranges", "bananas"];

myList[3] = "pineapples";

myList[0] = "watermelon";

for (let i = 0; i < 5; i++) {
  console.log("Loop" + i);
  if (i === 3) break;
}

//for (let i = 5; i > 0; i--) {
//  console.log("Loop" + i);
//}
