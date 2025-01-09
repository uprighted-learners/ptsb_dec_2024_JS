/* 

? Functions
    - Reusable block of code that performs a particular task
    - Can 'return' data to kick it back outside of the function
    - Simplified programs that run a task when invoked/called
*/

/* 
     (1)     (2)
    function hi () {
        console.log("hi")
    }

    1: Keyword
    2: Name of our function
        - Parenthesis are for parameters
*/


function hi () {
    console.log("hi");
}

hi() // invoking/calling the function


/* 
?   Function Expression

    const hey = function hello(){
        console.log("hey")
    }

    1: The variable "hey" is now a representation of the function "hello"

    ! Does NOT get hoisted
*/

const hey = function hello () {
    console.log("hey")
}

hey()


function greetings () {
    console.log("Hello there");
}


// greetings //! You must have () after the func name in order to invoke/call it
// console.log(greetings); Show to us what that variable represents
greetings()

//! Create a function that, when invoked/called, lists out the numbers 1-10 using a loop. 
//  - Name our function 'counting'.

function listNumbers () {
    for (let i = 1; i <= 10; i++) console.log(i);
}

listNumbers()


let arr = ["This", "is", "really", "cool", true, 1, false];

function arrLoop () {
    for (let item of arr) console.log(item);
} 

arrLoop()

let dogArray = ["Husky", "Shih Tzu", "Corgi", "Shiba Inu", "Golden Retriever"]

function callDogs () {
    // for(dog of dogArray){
    //     console.log(`${dog} goes woof`);
    // }
    for (index in dogArray){
        console.log(dogArray[index]);
        console.log("index:", index, "dog:", dogArray[index] );
    }

}
callDogs()


let num1 = 1;
let num2 = 2;


function addTwoNumbers () {
    let sum = num1 + num2
    console.log(sum);
} 

addTwoNumbers()


/* 
    ? Return
        - Allows the function to stop its execute & output a value
        - Useful for handling logic/computation/calculation and providing a single result
*/


let iHaveCoffee = false;

function returnToMeTheResultOfHavingCoffee () {

    if (iHaveCoffee){
        return "I am wide awake! 0_0"
    } 

    return "Sorry, no coffee available zzzzzzzZZ"
}

returnToMeTheResultOfHavingCoffee() // "I am wide awake! 0_0"

console.log(returnToMeTheResultOfHavingCoffee())

// let resultOfHavingCoffee = returnToMeTheResultOfHavingCoffee()

// console.log(resultOfHavingCoffee);


