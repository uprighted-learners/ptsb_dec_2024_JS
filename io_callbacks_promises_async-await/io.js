/* 
    ? IO & Callbacks
    * Process
        - An event that runs in the background or foreground of your machine
    * NodeJS allows access to its processes via process obj
    * This can allow the processing of IO
    * We can do this by utilizing process.stdin and process.stdout

*/

//? Import Process
const process = require("process")

// console.log(`This is output from the process PID:  ${process.pid}`);

/* 
    ? Callback function 

    * Fx that is passed as an argument to another fx or method
    * Is a fx that runs when something occurs
     - Usually Anonymous
        - ex) 
            - function () {}
            - () => {}
        - Short Lived
        - Non Reusable 
*/


// ? Callback Function Example

// const myFunction = (callbackFx) => {

//     console.log("Before we can the received function");

//     callbackFx()

// }

// ? Anonymous Arrow Function
// myFunction( () => {
//     console.log("Executing in the main function");
// })

// ? Anonymous Trad Function
// myFunction(function () {
//     console.log("Executing in the main function");
// })

// function namedCallback () {
    //     console.log("Executing in the main function");
    // }
    
//? Passing Function By Reference
// myFunction(namedCallback)


const processInput = (question, callback) => {
    console.log(question)
    process.stdin.once("data", callback)
}

// processInput("How are you feeling today? ", (input) => {
//     console.log(`I am feeling ${input}`);
//     process.exit() // Will terminate your js script
// })


// ? Importing Readline Interface 
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// rl.question("What is your name?", (userResponse) => {
//     console.log(userResponse);
//     rl.close()
// })

// console.log("That is a great name!");

/*
     ? Promises
        - They're like a box, they must unpacked in order to receive the value they contain
        - Where a value may be 'pending', 'resolved', or 'rejected'
        - Used for handling uncertainty
*/


const promise = new Promise((resolve, reject) => {
    resolve("This")
})


// How do we unpack promises?
// console.log(promise); // Output: Promise { 'This' }

// .then() //! Old way, best to be avoided

// promise.then((ourData) => {
//     console.log(ourData); // Output: "This"
// })


// async/await 

const asyncArrow = async () => {}

async function handlePromise () {
    console.log(await promise)
    // Will 'wait' for the above to finish
    console.log("We got out data!");
}

handlePromise()

console.log("Doing other stuff")
