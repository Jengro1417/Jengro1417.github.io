/*
* DATA TYPES:
*
*0. Different types of values that we use in our program 
*   two categories of datatypes Simple and Complex
*
*   1. Simple data types: 
*       - atomic, and immutable
*           . they dont hold or collect other valus
*           . operations on simple values return new simple vales they dont change the original value
*           . when assigned or passed they are copied from one data type to the next
*       - Types
*           . numbers
*           . strings
*           . booleans
*           . Nan (not a number)
*           . undefined
*           .null (no value, nullified by programmer)
*
*   2. Examples:
*/
    var age = 24;
    console.log(age);
    
    var nameFirst = 'Jacob';
    var fullName = nameFirst + ' ' + 'Stephen' + ' ' + 'Engro';
    console.log(nameFirst);
    console.log(fullName);
    
/*
*   3. Complex
*       - aggregate other values, indefinite in size
*       - when assigned or passed, complex data is passed by reference
*    4. Types
*       - array (can contain infinite elements)
*       - object (can contain infinite key: value pairs)
*       - function (can contain infinite statements)
*
*  5. Examples
*/
    var arr = ['nachos', 'lemonheads']
    arr.push('my dads boat');
    console.log(arr);
    
    var newObject = { name: 'Ryder', hobbies: 'eating socks', weight: 120};
    newObject.smell = 'stinky';
    console.log(newObject);
    
    
/*    
* 6. Copy by Value vs. Copy by reference 
*
*   - primitive data is copied by value
*   - complex data is copied by reference
*
* Examples
*/

var x = 1;
var y = x;
y = 7;
console.log(x); 
// still prints 1 to console

// passing values to a function
    function doIt(y) {
        y +=1;    
    }
    var z = 1;
    doIt(z);
    // prints 1 the value at z is copied when passed to the function
    console.log(z);
    


