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