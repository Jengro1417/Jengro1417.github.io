/*
*
*0. Control-Flow
*   -controls the flow of the application
*   -used with conditional states to run a certain code if the question is true or false
        -value is evaluted in boolean context
*   -can use if-else if-else statements or switch statements
*  
*1. If Else-if else Statements
*    - if statement starts conditional block of code
*    - else if statements chain any number of statements to ur if statement
*    - else statements end the chain
*    - Anatomy 
        - test condition ()
        - body {} executed if true
        - brackets matter and use conventional indentation
*
* 2. Examples
*/
    var color = "purple";
    
    if(color === "blue"){
        return false;
    }else if (color === "brown"){
        return false;
    }else if (color === "purple"){
        return true;
    }else {
        return false;
    }
    
/* 3. Switch Statements
*   - makes for cleaner code 
*   - evaluates an expression matches value to a case clause executes statements associated w/ that case
*   - break statements end the case (similiar to else?)
*       -failing to use a break will cause new code block to run unintentionally!!
*       - kills switch block
*
* 4. Examples
*/

var newColor = 'gold';

switch (newColor){
    case 'purple':
    case 'gold':
        console.log('GEAUX TIGAHS');
    break;
    case 'black':
    case 'gold':
        console.log('WHO DAT!');
    break;
    default:
        console.log('we dont like other colors');
}
// falsey vs truthy
//  -falsey => 0, nan, null, undefined, an empty string, or false
//  -truthy=> anything with value