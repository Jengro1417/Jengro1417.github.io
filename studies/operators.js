/*
*0. Operators
*   - operators act on our data 
*   - assigned to a variable, compared, or included in arithimetic 
*   - classed by what they do and how many OPERENDS are required 
*       -operends-- values that operators act on
*       -unary operators-- work w/ 1 value
*       -binary operators-- work w/ 2 values 
*       -ternary operators-- work w/ 3 values 
*
*   -Types of Operators
*       -Assignment
*       -Comparison 
*       -Arithmetic
*       -String 
*       -Logical
*       -Conditional(ternary) 
*       -Unary
*   -Comparison Operators:
*       - compare 2 operends evaluates to a boolean
*
* Example
*/ 
    console.log(8 < 9);
    console.log(8 <= 9);
/*
* Strict Comparison 
*   -takes into accont value and type. 
*   -ALWAYS USE STRICT COMPARISON
*
* Example
*/
    console.log(77 === 77);
    console.log(77 != 77);
/*
* UNARY OPERATOR EXAMPLE:
*/
    var x = 7;
    console.log(-x);
    console.log(7-7);
/*
* LOGICAL OPERATORS:
*   -(&&) AND operator
*       -both conditions need to be true 
*   -(||) OR operator
*       -one condition must be true
*   -(!) BANG operator
*       - flips the truthyness of value
*
* Examples:
*/
    console.log(7 > 6 && 8 < 9);// and op
    console.log(12 < 12 || 99 < 100);// or op
    console.log(!true) // bang op prints false
/*
*   Double Bang
*   -2 bang operators changes a value to boolean
*
*   String Operators:
*   -works with comparison operators 
*   -also uses concatenation
*       -takes 2 strings and returns another string(union of two operand strings)
*
* Example
*/
    var a = 'Who';
    var b = 'Dat'; 
    console.log(a + '-' + b);
