/* 
    ? IO & Callbacks
    * Process
        - An event that runs in the background or foreground of your machine
    * NodeJS allows access to its processes via process obj
    * This can allow the processing of IO
    * We can do this by utilizing process.stdin and process.stdout

*/

//? Import Process
const process = require("process");

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
  console.log(question);
  process.stdin.once("data", callback);
};

// processInput("How are you feeling today? ", (input) => {
//     console.log(`I am feeling ${input}`);
//     process.exit() // Will terminate your js script
// })

// ? Importing Readline Interface
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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
  resolve("This");
});

// How do we unpack promises?
// console.log(promise); // Output: Promise { 'This' }

// .then() //! Old way, best to be avoided

// promise.then((ourData) => {
//     console.log(ourData); // Output: "This"
// })

// async/await

const asyncArrow = async () => {};

async function handlePromise() {
  // In order to have access to 'await' the function must be 'async'
  console.log(await promise);
  // Will 'wait' for the above to finish
  console.log("We got out data!");
}

// handlePromise()

// console.log("Doing other stuff")

function ask(questionText) {
  return new Promise((resolve, reject) => {
    if (questionText) {
      rl.question(questionText + "\n", (text) => resolve(text.toLowerCase()));
    } else {
      reject("Provide a question please...");
    }
  });
}

async function start(question) {
  // Try/catch allows us to handle errors, especially with promises
  try {
    let response = await ask(question);

    if (response.length === 0) {
      console.log("Please provide an answer");
      // Since we want to create a type of 'loop', we'll use recursion
      await start(question);
    }

    if (response === "y") {
      console.log("Yay, here's some pie 🥧");
    } else if (response === "n") {
      console.log("Aww shucks");
    }

    rl.close();
  } catch (err) {
    console.log("Error:", err);
  }
}

// start() //! This will hit the catch block, because question is not being provided, and our promise will reject if no question provided.
// start("Do you like blueberry pie? (y/n)")

// console.log("I wonder what your answer will be ");

async function ask1(question) {
  return new Promise((resolve) =>
    rl.question(question, (input) => resolve(input))
  );
}

//? using .then syntax
// ask1("How is the weather").then(response => console.log(response))

//? using async/await
async function chainOfQuestions() {
  const firstResponse = await ask1("What is your name?");

  console.log(firstResponse);

  const secondResponse = await ask1("What is your age?");

  console.log(secondResponse);
}

// chainOfQuestions()

// ? Ask function with Traditional syntax

function gameAsk(questionText) {
  return new Promise((resolve) =>
    rl.question(questionText + "\n", (input) => resolve(input))
  );
}

// ? OR with an arrow function ...

// const gameAsk =  (questionText) =>  new Promise (resolve => rl.question(questionText+"\n", resolve))

let gameOn = true;

const gameStart = async () => {
  while (gameOn) {
    let response = await gameAsk("Give me a number!");

    let convertedResponse = parseInt(response);

    if (!Number(convertedResponse)) {
      console.log("Please provide a valid response");
    } else {
      console.log("Thanks for giving me a number, let's move on");

      let secondResponse = await gameAsk(
        `Do you really like the number (y/n): ${convertedResponse} `
      );

      if (secondResponse === "y") {
        console.log("Well that is sure a great number!");
      } else {
        continue;
      }

      gameOn = false;
    }
  }
};

gameStart();

const somePromise = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("secret value"), delay);
  });
};

const promiseHandler = async () => {
  console.log(await somePromise(1000));
  console.log("Log after 1 second");
  console.log(await somePromise(3000));
  console.log("Log after 3 seconds");
  console.log(await somePromise(2000));
  console.log("Log after 2 seconds");
};

promiseHandler();
