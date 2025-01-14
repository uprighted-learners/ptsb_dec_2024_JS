/* 

    ? Scope and Hoisting
    ? Scope 
        - Used to determine how information in different code blocks are accessed
    
    ? Five Scope Types:
    * Global/Window
    * Block
    * Function
    * Modules - If using external file
    * Lexical

*/

/* 
    ? Global Scope
    * Outermost scope
    * Window object when in the browser
    * JS file when in Node
    * Accessible from every other level of scope
*/

let globalScopedVariable = "This is a global scope variable";

{
    console.log(globalScopedVariable);
}

{{{{{{{{{{{{{{{{{{
    console.log(globalScopedVariable); // Can access globally scoped variable in nested scope
}}}}}}}}}}}}}}}}}}


/* 
    ? Function Scope
    * Accessible only inside of a function
*/

function scope () {
    let fxScopeVariable = "This is a function scoped variable"
    console.log(fxScopeVariable);
    console.log(globalScopedVariable);
}

scope()

// console.log(fxScopeVariable) //! ReferenceError: fxScopeVariable is not defined
// ! Cannot access a locally scoped variable


/* 
    ? Block Scope
    * Anywhere there are {}

*/
// let placeholder; //* Can also back out variables from nested scope, by doing reassignment

{
    let blockScopedVariable = "Block scope variable"
    // placeholder = blockScopedVariable
    console.log(blockScopedVariable);
}

// console.log(placeholder);

// console.log(blockScopedVariable) //! ReferenceError: blockScopedVariable is not defined



/* 
    ? Lexical Scope
    * Variables are accessed by their nested position
    * Inner FX scope can access outer FX scope
*/

function outerFx () {
    // Outer fx scope
    let ofxv = "Outer fx scoped variable"

    function innerFx() {
        // Inner fx scope
        let ifxv = "Inner fx scoped variable"
        console.log(ofxv);
        return ifxv
    }
    // innerFx() === "Inner fx scoped variable" // True

    return innerFx()
}

// outerFx() === "Inner fx scoped variable"

console.log(outerFx());
let innerScopedString = outerFx();


/* 
    ? Hoisting
    * JS' parsing engine reads top to bottom, left to right
    * JS' interpreter runs the code twice
        * First, it looks for VARiables and traditional fx declarations, it will hoist them ^ (moving them to the top)    
        * It allocates memory space for those declarations
        * It will then, execute the code line-by-line
*/







