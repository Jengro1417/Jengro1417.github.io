/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob


// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
* LET:
*
*0. Let declares a variable, but the variables you declare with Let are limited
*   in scope to the statement, block, or expression in which you've used it. LET is 
*   different from VAR because VAR declares a variable regardless of block scope.
*
*1. Creating a let variable is similiar to creating a var variable
*   a. Start with the keyword let followed by: a name, assignment operator, and the value given
*/
// 1. Creating a Let variable
let myLet = 'this is my let variable';
console.log(myLet); // prints >> 'this is my let variable'

// 2. Block
//  a. let values will be stuck in the scope of any code block so they are Block Scoped
//  b. used when there is limited use for said variable

// Example
    for(let i = 0; i <= 7; i++){
        console.log(i); // i will log 0 through 7
    }
// if console.log(i) is outside of the loop it will be not defined because i is only visible within the loop

/* CONST:
*0. Constants are block scoped (similiar to let) they can be either local or global to the block it is declared to
*   Declaring const creates a read only reference to the value it has been assigned
*   it doesn't become invisible but the variable identifier cannot be reassigned.
*/

//  1. Creating a const variable
const bestQuarterback = 'Drew Brees';
console.log(bestQuarterback); // prints >> 'Drew Brees'
/* if we try to change the value of the const variable we will recieve an error
* Uncaught syntax error: idententifier 'bestQuarterback' has already been declared */

/*
* HOISTING VARIABLES:  
*0. In a variables current scope no matter where it is declared, behind the scenes the variable
*   will be Hoisted to the top ALWAYS. The decleration will only be hoisted if the variable has been initilized
*   the current value at the top of the scope will be set to undefined.
*/