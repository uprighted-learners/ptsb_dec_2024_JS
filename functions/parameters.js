/* 
?   Parameters and Arguments 

                 (1)
    function hi (name) {
                             (2)
        console.log(`Hello ${name}`)
    } 

         (3)
    hi ("Amit")

    1: The parameter(s) that the function is accepting or holding
    2: Using string interpolation, we can refer to the parameter that was given to the function 
    3: This is where we define what the parameter's value is going to be
        - Known as an argument
*/



function order (foodItem) {
    console.log(`I exchanged my ticket for: ${foodItem}`);
}

order("Cheese pizza")
order("Burger")
order("Ice cream")

/* 
    - Write out a function that takes in 2 parameters
        - one is for first name
        - the other is for last name

    - Have them come together within a variable within the function
    - Log "Hello my name is <fullNameVar>"
    - Call/Invoke your function
*/


function fullName (fName, lName) {
        let myFullName = fName + " " + lName
        console.log(`Hello my name is ${myFullName}`)
        // console.log("Hello my name is " + myFullName)
}

fullName("Amit", "Mangat")



function calc (x, y, operator) {

    switch (operator) {
        case "+":
            console.log("Add", x, y);
            return x + y
        case "*":
            console.log("Multiply", x, y);
            return x * y
        case "/":
            console.log("Divide", x, y);
            return x / y
    }


}

console.log(calc(1, 2, "+"))
console.log(calc(3, 3, "*"))

let sum = calc(45, 2, "+")


console.log(typeof console)

// console.log("hello", true, 1)

// let console = 5 //! Don't ever overwrite 
// console.log()

let mockConsoleObject = { 
    log: function (text) {
        process.stdout.write(text + "\n")
    },
    add: function (num1, num2) {
        return num1 + num2
    },
    capitalize: function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }
}

mockConsoleObject.log("Hello world!")


console.log(mockConsoleObject.capitalize("sPonGeBob"))
console.log(mockConsoleObject.add(4, 6))