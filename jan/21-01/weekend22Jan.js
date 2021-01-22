// Object Data

let data = {
  name: "Coder Ali",
  age: 20,
  working: true,
  isMarried: true,
  language: ["html", "css", "javascript"],
  myFunction() {
    return 10 * 10;
  },
};
data.name = "Coder Ali JavaScript"; //  لتعديل الاسم مره اخرى من داخل الاوبجكت
//delete data.name; لحذف الاسم من داخل الاوبجكت
// first Way to console log!

// to add a new key to an object data all you have to do is like so : ==>>>
data.color = "Blue";

console.log(data.working);
console.log(data.name);
console.log(data.age);
console.log(data.isMarried);
console.log(data.language);
console.log(data.language[2]);
console.log(data.myFunction());
console.log(data.color);

// second way to console log!
console.log(data["name"]);
console.log(data["age"]);
console.log(data["isMarried"]);
console.log(data["working"]);
console.log(data["language"]);
//console.log(data["myFunction"]); ????

console.log(data); // لعرض البيانات المتواجده ضمن اوبجكت
