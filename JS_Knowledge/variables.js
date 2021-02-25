/* HOISTING is a mechanism in Javascript, where functions and variable declarations are moved to the top of their scope before execution.
This means that before code execution starts, the variables and functions are already declared (prepared?) as undefined, ready to be initialized.
Interestingly, to HOIST means to raise (something) by means of ropes and pulleys.
*/

/* 
VAR   :   When declared outside all functions and block scopes, the variable can be used 
          anywhere within entire scope of the javacript program. Can be re-declared more than once.
          NOTE: if a global variable is re-declared (with VAR inside function), the variable will now
          return undefined outside of funtion.)
LET   :   Can only be declared once within the same scope. Is bound by the scope of the block it is
          declared within. Can't be used outside of its scope.
CONST :   Is used for variables that don't change, like enums, functions and objects. It can't be 
          re-declared after being declared. 
          In the case of arrays and objects, while the variable itself can't be changed, its CONTENTS 
          (elements/properties, etc.) can be changed using properties and dot notation.   
*/


// Example of the use of VAR as a global variable

console.log ("\nVAR example \n")

var name = "Donald"     // a global variable name is declared with the value Donald

function Trumpism() {
    console.log(name)   // the current value of name is printed
    name = "Trump"      // we reassign the value of name to Trump inside the function
                        // if a var was in front of name here, the function would return a undefined
}

Trumpism()              // before the function Trumpism is invoked, the value of name is Donald
console.log(name)       // AFTER the function, the value of name is now Trump, as it was changed
                        // inside the function

// Example of the use of LET

console.log("\nLET example\n")

let name2 = "Donald"     // variable name2 is declared using let with the value Donald

function Trumpism2() {
    let name2 = "Trump" // a local, block scoped variable name2 is declared with the value Trump
    console.log(name2)  // the variable name2, declared inside the function is printed to the screen
                        // name2 can be re-ASSIGNED, but NOT re-DECLARED (e.g. no second let name2 = ...)
                        // by time the Trumpism2 function returns control to the main flow of the program,
                        // the name2 variable that was declared inside the function is GONE.
} 

Trumpism2()             // before the function Trumpism2 is invoked, the value of name2 is Donald
console.log(name2)      // AFTER the function, the value of name2 (as first declared OUTSIDE the 
                        // function) is STILL Donald
 

// Example of the use of CONST

console.log("\nCONST examples\n")

const name3 = "Donald"  // Constant variable name3 is declared with the value Donald

console.log(name3)      // Value of constant variable name3 is printed to the screen

// name3 = "Trump"      // TypeError - constant variable cannot be re-ASSIGNED or 
                        // re-DECLARED for that matter.

const array = [1,2,3]       // constant variable array is assigned values 1-3

console.log(array);         // constant variable array is printed to the screen

array[0]=4;                 // the CONTENT of the constant array is re-ASSIGNED values 4-6
array[1]=5;
array[2]=6;

console.log(array);         // the SAME constant variable array is printed to the screen with new CONTENT. 