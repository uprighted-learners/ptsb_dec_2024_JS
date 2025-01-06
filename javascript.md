# JavaScript Fundamentals Cheatsheet

## Table of Contents
1. [Running JS](#running)
2. [Variables](#variables)
3. [Data Types](#data-types)
4. [Functions](#functions)
5. [Conditionals](#conditionals)
6. [Loops](#loops)
7. [Arrays](#arrays)
8. [Objects](#objects)
9. [DOM Manipulation](#dom-manipulation)
10. [Useful VSCode Emmet Abbreviations](#useful-vscode-emmet-abbreviations)

---

## Running
To execute JavaScript ensure that node is installed.
To check, run this command from the terminal.
```node --version``` 

You then have 2 ways to run JS on your machine

<b>Code Runner Extension (VSCode) :</b>

- To Begin Execution:

  - Win: ```CTRL + ALT + N```

  - MAC: ```CMD + ALT + N```

- To Stop Execution:

  - Win: ```CTRL + ALT + M```

  - MAC: ```CMD + ALT + M```

<b>Node (Terminal) :</b>

- To Begin Execution:

  - From the terminal: ```node FILE_NAME.js```

- To Stop Execution:

  - Win: ```CTRL + C```

  - MAC: ```CMD + C```

## Variables
```javascript
// Declaring variables
let age = 25;        // Can be reassigned
const pi = 3.14;     // Cannot be reassigned
var name = "John";   // Old way (avoid using)
```

## Data Types
```javascript
// Primitive types
let number = 42;               // Number
let string = "Hello, World!";  // String
let isTrue = true;             // Boolean
let notDefined;                // Undefined
let emptyValue = null;         // Null

// Reference types
let array = [1, "Joe", false]
let object = {player: 1, score: 5000}

// Check data type
console.log(typeof number);    // "number"
```
## Conditionals
```javascript
// if-else statement
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
// Ternary operator
const status = age > 18 ? "Adult" : "Minor";
console.log(status);
```



## Functions
```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 3));
```
## Loops
```javascript
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}


// forEach (Array loop)
[1, 2, 3].forEach(num => console.log(num));
```
## Arrays
```javascript
// Declaring an array
let fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements
console.log(fruits[0]);  // "Apple"

// Adding elements
fruits.push("Date");     // Adds to the end

// Removing elements
fruits.pop();            // Removes from the end
```
## Objects
```javascript
// Object literal
let person = {
  name: "Alice",
  age: 30,
  greet: function() {
    return `Hi, I'm ${this.name}`;
  }
};
console.log(person.greet());
```
## DOM Manipulation
```javascript
// Selecting elements
let title = document.querySelector("h1");

// Changing content
title.textContent = "Hello, DOM!";

// Adding an event listener
title.addEventListener("click", () => alert("Title clicked!"));
```
## Useful VSCode Emmet Abbreviations

clg
Expands to:

```javascript
console.log();
```
fn
Expands to:

```javascript
function name() {}
```
=>
Expands to:

```javascript
() => {}
```
for
Expands to:

```javascript
for (let i = 0; i < length; i++) {}
```

!
Expands to:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
</body>
</html>
```
ul>li*3
Expands to:

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

div#app
Expands to:

```html
<div id="app"></div>
```
