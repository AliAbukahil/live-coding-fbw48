//      إستخدامه     الرمز
//      >	        علامة أكبر من
//      <	        علامة أصغر من
//      >=	        علامة أكبر من أو يساوي
//      <=	        علامة أصغر من أو يساوي
//      ==	        القيمتين متساويتين بغض النظر
//                  عن نوع البيانات أي أن القيمة 1 تساوي القيمة '1'
//      !=	        القيمتين غير متساويتين
//      ===     	القيمتين متساويتين ومن نفس نوع البيانات أي أن القيمة 1 لا تساوي القيمة '1'
//      !==     	القيمتين غير متساويتين مع الأخذ في الإعتبار نوع البيانات

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

// string.replace(searchvalue, newvalue)
//     "searchvalue"
//    / searchvalue /g
//    / searchvalue / i    للبحث عن القيمة - دون تدقيق بالأحرف الصغير او الكبيرة

// substring(start,end)
//

// length لإعادة طول النص
// لإعادة تمركز اول قيمة يطابق مع القيمة الذي تحدده في حال توجدها في النص
// indexOf(value)
// lastIndexOf(value) لإعادة تمركز أخر قيمة يطابق مع القيمة الذي تحدده في حال توجدها في النص
// search(value)  للبحث عن تمركز
// startsWith(value)للتحقق هل يبدأ النص بنفس القيمة الذي تحددها او لا ويقوم بإعادة قيمة ب صح او خطأ
// endsWith(value) للتحقق هل ينتهي النص بنفس القيمة الذي تحددها او لا ويقوم بإعادة قيمة ب صح او خطأ

// toUpperCase()  لتحويل جميع أحرف إلى الأحرف الكبيرة
// toLowerCase()  لتحويل جميع أحرف إلى الأحرف الصغير
// concat()     لدمج 2 متغيرات من نوع النصي مع بعض
// trim()   لحذف الفراغات في البداية والنهاية القيمة المتغير
// charAt()   index لتحديد قيمه تمركز ال

//let text = "he learn javascript";
//text = text.charAt(0).toUpperCase() + text.slice(1);
//text = text.replace(text,text+".");
//alert(text);
// text = text.charAt(0).toUpperCase() + text.slice(1);
// alert(text);

let textReplacer =
  "$Do$not$peel$the$banana$from$the$top,$but$from$the$bottom.$try$it!$";
textReplacer = textReplacer.replace(/\$/g, " ");
console.log(textReplacer);

textReplacer = textReplacer.replace(/banana/g, "Apple");
console.log(textReplacer);

textReplacer = textReplacer.replace(/top/g, "middle");
console.log(textReplacer);

textReplacer = textReplacer.replace(/!/i, "§");
console.log(textReplacer);

textReplacer = textReplacer.replace(/Apple/i, "Tomato");
console.log(textReplacer);

let textCutter = "It Is all about the Benjamin!";

textCutter = textCutter.toUpperCase();
console.log(textCutter);

textCutter = textCutter.substring(16, 29);
console.log(textCutter);

// Array

let firstName1 = "Natasha";
let lastName1 = "Sharapova";
let age = 24;
let isMarried = true;
let country = "Germany";

let id_1 = ["Natasha", "Sharapova ", 24, true, "Germany"];

console.log(
  "\n Name: " +
    id_1[0] +
    "\n LastName: " +
    id_1[1] +
    "\n Age: " +
    id_1[2] +
    "\n Married: " +
    id_1[3] +
    "\n Country: " +
    id_1[4]
);

console.log(id_1[0] + id_1[1] + id_1[2] + id_1[3] + id_1[4] /*  + id_1[5] */); // Number 5 will show me undefined because there is no index 5 in the Array in the variable id_1

console.log(id_1.indexOf(true));
console.log(id_1.indexOf("Germany"));
console.log(id_1.indexOf("Natasha"));
console.log(id_1.indexOf(24));
console.log(id_1.indexOf("Sharapova "));

console.log(id_1.length);
