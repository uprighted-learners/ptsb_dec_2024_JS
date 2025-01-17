// Assignment Review

// ? [JS] Capitalize

let word = "aMiT";
let fullWord = word[0].toUpperCase() + word.slice(1).toLowerCase();

//? [JS] Hello Friend, Go away Enemy

let enemy = "darth vAdEr";

function greeter(name) {
  let nameLowerCased = name.toLowerCase();
  let enemyLowerCased = enemy.toLowerCase();

  if (nameLowerCased === enemyLowerCased) {
    console.log(`Go away ${name}`);
  } else {
    console.log(`Hello ${name}!`);
  }
}

greeter("Darth Vader");

"darth vader" === "darth vader";

// (Loosely Equals) == you are just comparing without taking data type into account
// (Strictly Equals) === the value AND data type must match in order

let variable1 = 2;
let variable2 = "2";

if (variable1 === variable2) {
  console.log(variable1 + variable2);
}

// Review
// ? Data Types / Variables

let x; // Used most often, new and improved / When a variable is declared with no value, it automatically gets "undefined" as its value
// console.log(x); // Undefined
x = 5; // Let allows reassignment
console.log(x); // 5

var z; //! Avoid using, can "trickle" out of scope

const y = () => {}; // Cannot be reassigned a new value, usually great for anonymous functions

// y = 5 //! Cannot reassign, TypeError

// - Data Types (Primitive)

let myString1 = ""; // undefined (falsy) if no value assigned
let myString2 = "hello";
let myString3 = `hello`; // Availability to provide string interpolation ${}

// String interpolation

let stringInter = `The first thing a programmer usually types is: ${
  myString1 ? "Hello world" : "idk, as there wasn't a value"
}`;

console.log(stringInter);

console.log(typeof myString1);
console.log(typeof myString2);
console.log(typeof myString3);

let myNumber = 498;
let myBool = true;
let myUndefined = undefined;
let myNull = null;

// ? Conditionals

if (true) {
  console.log("this will always log b/c condition is hardcoded to true");
}

let conditionalVariable = "";

if (conditionalVariable) {
  console.log("Val is truthy");
} else {
  console.log("Val is falsy");
}

let x1 = "some value";

// OR operator
if (x1 || x) {
  console.log("Yay, it printed for OR");
}

if (x1 && x) {
  console.log("Yay it printed for AND");
}

let myName = "Amit"; // truthy
let myFavFood = "pizza";

if (myName) {
  console.log(`Welcome ${myName}!`);

  if (myName && myFavFood) {
    console.log(`${myName}'s fav food is: ${myFavFood} `);
  }
}

let user = "Timmy";

let verified = true;

if (user || verified) {
  console.log("Hey you're a use of our db");
}

let score = 10;
let playerScoreString = `${
  score ? `Your score is: ${score}` : "Sorry no score available yet"
}`;
console.log(playerScoreString);

/*
!   Challenge 
    - Given an array, create a function that lists out the values individually. Name the function logStrings. List only the string values

*/

let arr = [
  "Getting",
  NaN,
  "the",
  undefined,
  "data",
  "we",
  true,
  "desire!",
  1,
  false,
];

for (value of arr) {
  if (typeof value === "string") {
    console.log(value);
  }
}

/* 
!     Challenge
        - Using a for loop, print out numbers (1-100) that increase by 1, starting at 1.

        - Within the loop create a chain of if else statements that will check if a number is divisible by 3. If so, print to the console: "Fizz", along with the value
        - If a number is divisible by 5, print to the console: "Buzz", along with the value
        - If it is divisible by both print to the console: "Fizz Buzz", along with the value 
*/

for (let number = 1; number <= 100; number++) {
  // console.log(number);
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("Fizz Buzz", number);
  } else if (number % 3 === 0) {
    console.log("Fizz", number);
  } else if (number % 5 === 0) {
    console.log("Buzz", number);
  }
}

/* 
    ! Pythagorean Theorem Challenge
    * right angle triangle has three sides
    * the longest side c is calculated by taking the formula
    *    - a**2 + b**2 = c**2
    * Create a function that takes the two triangle sides
    * Returns the hypotenuse
    ? HINT: c = sqrt(a **2 + b ** 2)
    ? Can use Math library for a sq root function
*/

function randomGuesser(min, max, smart) {
  if (smart) {
    return Math.floor((Math.random() * max) / 2);
  } else {
    return Math.floor(Math.random() * max + min);
  }
}

let min = 1;
let max = 5;
let smart = false;

//  min = computer's guess + 1
//  max = computer's guess - 1

max = 3;

console.log(randomGuesser(min, max, smart));

function fullName(first, last) {
  return first + " " + last;
}
console.log(randomGuesser());
console.log(randomGuesser());

console.log(fullName("Salo", "Vasquez"));
console.log(fullName("Amit", "Mangat"));

function tradFunc(x, y) {
  return x + y;
}

console.log(tradFunc(2, 3));

const addNumbers = (x, y) => x + y


console.log(addNumbers(5, 3))

const arrowFuncSingleArg = x => x+=1


console.log(arrowFuncSingleArg(5))