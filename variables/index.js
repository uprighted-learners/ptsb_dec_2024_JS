/* 
    ? Variables
    * containers that store data in memory
    * declaration
        * allows memory space to be reserved by using an identifier
        * starts with let, var, or const keyword
        * cannot start with a number of character other than $ or _
        * if no value is assigned, it's undefined
    * initialization
        * assignment of data value
        * can be any value or data type (str, int, arr, fx, class, etc.)
        * can be reassigned (except for const)
*/

// Variable declaration
let firstName;
console.log(firstName);

// Variable declaration and variable initilization
let lastName = "Bunny";
console.log(lastName);

console.log("The value of firstName is still: ", firstName);
// Reassignment
firstName = "Bugs";
console.log("After reassignment, the value is now: ", firstName);

// ? String Concatenate your instructor's name
console.log(firstName + lastName);

// ? String Interpolate your instructor's name and assign it to fullName variable
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// (a)  (b) (c)        (d)
let address = "123 Main St, Salem, MA";
// (e)  =       (f)

/*

    * a - keyword
    * b - variable identifier
    * c - assignment operator
    * d - value or initializer
    * e - variable declaration
    * f - variable initilization or value assignment

*/

// ? Var is hoisted whereas let is not
// ! DO NOT USE !
var age = 26;
console.log(age);

// ? Const variable CANNOT have a reassigned value
const ssn = "123-45-6789";
console.log(ssn);
// ssn = "333-33-3333"; // TypeError - cannot reassign const

/* 
    ? Coding Practices for Variables
    * be concise (ex: firstName instead of usersFirstBornBlondeHairedChildsName)
    * be specific (ex: item instead of i)
    * utilize camelCase (most popular in JS)
    * snake_case
    * PascalCase
    * skewer-case
    * nocase
    * SCREAMING_CASE (used for env variables etc.)
*/

/* 
    ! Challenge
    * set variables of fName, lName, houseNumber, aptNum (if applicable)
    * street, city, state, post code
    * Concatenate or interpolate them together into a variable called addressStamp
    * console log it
    ! Spicey Mode - 🌶️🌶️🌶️🌶️
    * assign the state value to be lowercase, but when you console log, it should capitalize the state
*/

let fName = "Dan";
let lName = "Riggs";
let houseNumber = "123";
let street = "Parker Rd";
let cityState = "Springfield, ma";
let postCode = "05401";
console.log(postCode);
let stamp = `My name and address is: ${fName} ${lName} \n ${houseNumber} ${street} \n ${cityState.slice(
  0,
  12
)} ${cityState.slice(13).toUpperCase()} ${postCode}`;

console.log(stamp);
