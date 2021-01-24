/* Recap

You can create strings with " or '.
.length is a property that gives you the length of a string
.includes(searchString) returns true or false based on whether the searchString was found or not.
.toUpperCase() is a function that converts the string to upper case
.toLowerCase() is a function that converts the string to lower case
parentheses () on functions are required. .length is a property which is already pre-computed thus why it does not need parentheses
console.log(...) is used for debugging and is NOT a replacement for return. */

const text = "Hello World";

text.toUpperCase();
////////////////////

const text = "Code to go has awesome use cases!";

text.includes("Code to go");
//////////////////////

const text = "Hello World";

text.toLowerCase();
////////////////////

const text = "Hello World";

text.toLowerCase();
///////////////

/**
 * @param {string} name
 */
function getNameLength(name) {
  return name.length;
}

//sample usage
console.log(getNameLength("John"));
console.log(getNameLength("Argentina!"));
console.log(getNameLength("Macedonia"));
///////////////////////////////////

/**
 * @param {string} name
 */
function nameInUpperCase(name) {
  return name.toUpperCase();
}

//sample usage
console.log(nameInUpperCase("Jennifer"));
console.log(nameInUpperCase("Diego"));

///////////////////////////

/**
 * @param {string} name
 */
function nameInLowerCase(name) {
  return name.toLowerCase();
}

//sample usage
console.log(nameInLowerCase("Jennifer"));
console.log(nameInLowerCase("Diego"));

////////////////////////

/**
 * @param {string} name
 */
function getFirstCharacter(name) {
  return name[0];
}

//sample usage
console.log(getFirstCharacter("Blane"));
console.log(getFirstCharacter("Amsterdam"));

///////////////

/**
 * @param {string} name
 */
function getLastCharacter(name) {
  return name[name.length - 1];
}

//sample usage
console.log(getLastCharacter("John"));
console.log(getLastCharacter("Jennifer"));

///////////////////

/* Recap
A substring is a part or a portion of a string.

string.substring(indexStart, indexEnd) is used to return a portion of the string.

indexStart: the position of the first character you'd like to include.

indexEnd: the position of the first character you'd like to ignore.

the indexEnd argument is optional which means you can leave it out.
 */
