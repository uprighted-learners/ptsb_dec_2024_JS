/* 
    let hi = () => {
        console.log("hi")
    }

    - We have to set the arrow func to a variable in order to call it in various places or to reuse it
    - Arrow funcs, or (fat arrow functions) were introduced in ES6. They are a more concise way to write function expressions
        ! Do not get hoisted
*/

//? Concise Body

const hi = () => console.log("hi")

hi()


//? Block Body

const hello = () => {
    let greeting = "Hello"
    let name = "Bob"
    return `${greeting} ${name}`
}

console.log(hello())


//? Implicit Returns
let apples1 = (x) => `There are ${x} apples` 
// console.log(apples1(10))

//? Explicit Return 
let apples2 = (x) => {
    return `There are ${x} apples`
}

console.log(apples2(8));

let bill = 100;

const tipCalc = (subTotal) => {
    let tip = subTotal * 0.2
    let total = subTotal + tip
    return total.toFixed(2)
}

let total = tipCalc(bill)

console.log(total)


let subTotal = 10;
let salesTax = .07;

const totalWithTax = (subT, tax) => {
    return (subT * tax + subT).toFixed(2)
}

const totalWithTaxImplicit = (subT, tax) => (subT * tax + subT).toFixed(2)

console.log(totalWithTaxImplicit(subTotal, salesTax))

