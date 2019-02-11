/*
*
*0. LOOPS:
*   - built in constructs allow us to execute a code block as much as we want 
*   - pulls value out of collections to work with 1x1
*   
*1. For Loops:
*   - good for looping over arrays
*   - set up
*       - index, condition, increment
*  EXAMPLE:
*/
    var names = []
    for(var i = 0; i < names.length; i++){
        console.log(i);
    }
    // forward loop
    for(var i = names.length; i > 0; i--){
        console.log(i);
    }
    // backwards loop
/*
*2. For In Loop:
*   -designed for looping over objects
*   -pulls out keys in object 
*   -allows you to get the value in object
* 
* Example:
*/
    var me = { firstName: 'Jake', lastName: 'Engro'}
    for (var key in me){
        console.log(me[key]);
    }
    // keys are strings
    // use array syntax []
    // don't use dot syntax!!!
/*
*3. While Loop
*   -states a conditon WHILE true will execute code block in body of the loop
*   -set a break from loop, infinite loop will cause program to crash
*
* Example
*/
    var thisNumber = 1;
    while(thisNumber < 10){
        console.log(thisNumber);
        thisNumber ++;
    }