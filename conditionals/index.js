/* 
? Conditionals and Logic Gates
    - Conditional statement checks if an expression is truthy
    - The expression must always resolve to true
    - If it is truthy, a code within a statement executes
    - If it is falsy, nothing happens, it gets skipped

    ? Expressions vs statements
    * Expression
        - Unprocessed value grouped using ()
        - Evaluated to be truthy
        - Can be empty
    * Expressions Evaluate
    
    * Statements
        * keyword 
        * expression
        * and code block
    
    * Statements evaluate and execute the codeblock when invoked
        ! Conditional is an example of a statement
*/

/* 
?   If Statement
    * Checks if something is true, and executes the code that follows
*/

if (true) console.log("This will log because the expression is true.") 

let lightSwitch = "on";

console.log("The value of the lightswitch is: ", Boolean(lightSwitch));

if (lightSwitch == "on"){
    console.log("let there be light!");
}

/* 
?   Else Statement
    * If all ELSE fails, execute this code
*/


if (false) console.log("Log if true");
else console.log("Log if false");

let temp = 100;

if (temp >= 100) {
    console.log("inferno");
}else {
    console.log("some other temp");
}

/* 
?   Else If Statements
    * Allows us to add additional condition(s) if the prior has not been satisfied
*/

/* 
    ? SYNTAX:

    if (conditionIsTrue) {
        execute this block of code
    } else if (otherConditionIsTrue) {
        execute this block of code
    } else {
        execute this block if nothing passes above
    }
*/

temp = 16;

// ! Order is important, greater/more specific should come at the top
// if (temp >= 80) {
//     console.log("it's pretty hot out today");
// } else if (temp >= 65) {
//     console.log("it is a nice day");
// } else if (temp >= 100) {
//     console.log("it is scorching outside!!");
// } else {
//     console.log("it might be chilly outside");
// }

if (temp >= 100){
    console.log("its scorching");
} else if (temp >= 80){
    console.log("its hot outside");
} else if (temp >= 65){
    console.log("its nice out");
} else if (temp > 32) {
    console.log("it is cold");
} else {
    console.log("it is freezing");
}

//! Important to cover fallthrough, greater/more specific condition should ALWAYS be first

let myName = "Amit";
let length = 5;

if (myName[0] == "A" && myName.length > length){
    console.log(`Your name starts with the letter A, and it is greater than ${length} characters`);
} else if (myName[0] == "A") {
    console.log("Your name starts with the letter A");
} 


/* 
?   Logical Operators NOT, AND, OR
    * OR Operator ( || )
        - True if one of the conditions is true
        ex: I will be happy if i go to the movies OR eat dinner
        
    * AND Operator ( && )
        - True if BOTH of the conditions are true
        ex: I will be happy if i go to the movies AND eat dinner

    * NOT Operator ( ! or in an expression != )
        - Flips the logical expression
*/

// ? NOT

lightSwitch = 0;

if (!lightSwitch) {
    console.log("The light switch is off");
}

if (lightSwitch == false) {
    console.log("The light switch is off");
}

lightSwitch = "off";

if (lightSwitch != "on"){
    console.log("The light is off");
} 

// ? AND OR Example

let sensor = "inactive";
let alarm = false;

if (sensor === "active" || alarm){
    console.log("The alarm may be on");
} else if (sensor === "inactive" && alarm){
    console.log("Your sensor is likely broken");
} else if (sensor === "inactive" && !alarm){
    console.log("The alarm is likely off");
}


// ! Challenge 
/* 
    - Create an age variable with a number between 0-100
    - Check if the age is under 16, if so, say they can't drive
    - If the age is between 16 & 18, say they can drive but not vote
    - If the age is between 18 & 21, say they can vote but not drink
    - If the age is over 21, they can drink 
*/


let age = 17;

if (age < 16){
    console.log("Cannot drive");
} else if (age < 18){
    console.log("You can drive but not vote");
} else if (age < 21){
    console.log("You can vote but not drink");
} else if (age >= 21){
    console.log("You can drink!!");
} else {
    console.log("Hey, you didn't provide me with a valid number");
}


if (age < 16){
    console.log("Cannot drive");
}

if (age < 18){
    console.log("You can drive but not vote");
}

// ! Important Note
// * If you want your condition to display ANY possible match, create separate if statements
// * If you want your condition to display ONE possible match, create a chain of an if statement

/* 
?   Ternaries
    * an expression
    * a quick way of creating if/else conditional
    * commonly used to check a quick condition
    

?   Syntax:

    condition ? expr if true : expr if false

    ? Chaining Syntax
    condition ? expr if true
              : else if exr ? expr if true 
              : else if exr ? expr if true
              : null

*/

let ignition = true;

ignition ? console.log("Ready to start") : console.log("Turn ignition on first");

//? Chaining ternaries

let season = 3;

if (season === 1){
    console.log("Spring");
} else if (season === 2){
    console.log("Summer");
} else if (season === 3){
    console.log("Autumn");
} else if (season === 4) {
    console.log("Winter");
}

season === 1
    ? console.log("Spring")
    : season === 2
    ? console.log("Summer")
    : season === 3 
    ? console.log("Autumn")
    : season === 4
    ? console.log("Winter")
    : null



age = 29
let myAgeSentence = age === 34 ? "Amit is 34" : "Amit is not 34"

console.log(myAgeSentence);

age < 16
? console.log("cant drive")
: age < 18 
? console.log("can drive") 
: console.log("provide a valid number")


/* 
?   Switch Statements
    * execute a block of code dependant upon different cases
    * we can ask a question requiring specific responses determined by our answer 
*/

let x = 10;

switch (true) {
    case x > 5 :
        console.log("x is greater than 5");
        break;
    case x > 2 :
        console.log("x is greater than 2");
        break;
    default :
        console.log("Something went wrong")

}

let uprightInstructor = "Max";

switch (uprightInstructor) {
    // condition to be checked
    case "Daniel":
        // Run the code within the case if true
        console.log(`${uprightInstructor} is our SD teaching assistant.`);
        // break is used to stop other cases from evaluating
        break;
    case "Amit":
        console.log(`${uprightInstructor} is our class SD instructor`);
        break;
    case "Max":
        console.log(`${uprightInstructor} is our Program Manager`);
        break;
    default:
        console.log(`${uprightInstructor} may not be found in our database.`);
}


