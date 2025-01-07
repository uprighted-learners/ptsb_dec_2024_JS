/* 
? Loops

? Traditional For Loop
    Takes in 3 parameters
        - initial expression
        - condition
        - increment/dec expression

    Structure:
        for (initial expr ; condition ; inc/dec expression) {
            ... code to run on each iteration
        }
*/

console.log("Traditional For Loop:")
console.log("-".repeat(15))

//?     1         2       4
for (let i = 0; i <= 10; i++) {
    console.log(i); //? 3 
}

/* 
    1. Reserving a new variable name (i) to store an initial value in
    2. As long as this condition as met, run the following code block
    3. Code executes
    4. Increase our variable value by 1

    * Repeats steps 2-4
*/

for (let i = 0; i <= 20; i+=2){
    console.log(i);
}

// Counts down from 10 by 1

for (let i = 10; i >= 0; i--){
    console.log(i);
}

for (let i = 0; i <= 10; i++) console.log(i);

let firstName = "Billy";
console.log(firstName[2]);

for (let i = 0; i < firstName.length; i++){
    console.log(`Index: ${i}`,firstName[i]);
}

// Add a collected sum of numbers

let sum = 0;

for (let i = 1; i <=50; i++){
    // console.log(i);
    sum+=i
}

console.log(sum);


// Log even numbers going up to 20
for (let i = 0; i <= 20; i++){
    if (i % 2 === 0) console.log(i);
}

// For of loops work best on arrays
console.log("\nFor of loop:");
console.log("-".repeat(10));

let folders = ["Documents", "Desktop", "Pictures", "Downloads"]

// for (let i = 0; i < folders.length; i++){
//     console.log(folders[i])
// }

for (let folder of folders) {
    console.log(folder);
}

// For in loops work best on objects
console.log("\nFor in loop:");
console.log("-".repeat(10));

let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    week: 6
}

// console.log(student["name"]);

for (let key in student ) {
    console.log(`Key: ${key}`, `Value: ${student[key]}`);
}


let catArray = ["tabby", "british shorthair", "maine coon", "rag doll"]

for (let cat of catArray){
    if (cat === "tabby"){
        console.log(`${cat} goes meow!`);
    }
}


//! Challenge:
/* 
    // Based on the array provided, use a loop to log each developer

    // After you've successfully logged each dev, remove that console.log

    Create a nested if statement within the loop, which will only log the dev's name, if it exceeds x amount of characters

    Amount of characters are represented by the characters variable

*/

let characters = 5;
let listOfDevs = ["Tim", "Jessica", "Anthony", "Alexis", "Joe", "Rebecca", "Isaiah", "John"];

for (let dev of listOfDevs ) {
    // console.log(dev);
    if (dev.length > characters ) {
        console.log(dev);
    }
}
