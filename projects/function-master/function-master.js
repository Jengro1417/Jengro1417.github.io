//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // objectValues() : Should take an object and return its values in an array (2, 0, 2)
    // create array
    // push values from obj into array 
    
    var myArray = [];
    for (var key in object){
        // need to bracket my object to get values
        myArray.push(object[key]);
    }return myArray;
}


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // keysToString() : Should take an object and return all its keys in a string each separated with a space (2, 0, 2)
    // loop through object 
    // return new string concatenated
    var newString = [];
    for (var key in object){
        newString.push(key);
    }return newString.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // valuesToString() : Should take an object and return all its string values in a string each separated with a space (2, 0, 2)
    var valueString = '';
    for (var key in object){
       if (typeof object[key] === 'string'){
           valueString += object[key] + ' ';
       }
    
    }
    var newString = valueString.slice(0, valueString.length - 1);
        return newString;
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return 'array';
    }else{
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized (3, 0, 3)
    // upper case but return whole word
    return string[0].toUpperCase() + string.substring(1); 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized (2, 0, 2)
    //make all caps per every word in my index
    var newString = '';
    var stringArr = string.split(' ');
    for (var i = 0; i < stringArr.length; i++){
        stringArr[i] = stringArr[i][0].toUpperCase() + stringArr[i].substring(1);
        newString += stringArr[i] + ' ';
    }
    return newString = newString.slice(0, newString.length-1);
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!' (2, 0, 2)
    // new var to make object name capital
    var modString = object.name[0].toUpperCase() + object.name.substring(1);
    return 'Welcome ' + modString + '!' 
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>' (2, 0, 2)
    var objName = object.name[0].toUpperCase() + object.name.substring(1);
    var objSpecies = object.species[0].toUpperCase() + object.species.substring(1);
    // built 2 vars
    // need to upper case both name and species 
    return objName + ' is a ' + objSpecies;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    /* maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, 
    if there are no noises return 'there are no noises'*/
    // returning a new string + ' '
    // searching object for a noises array
     if (object.hasOwnProperty('noises') === true && object.noises.length > 0){
         return object.noises.join(' ');
     }else{
         return 'there are no noises';
     }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    /*hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, 
    otherwise return false. (3, 0, 3)*/
    // if statement for sure
    var splitArr = string.split(' ');
    for (var i = 0; i < splitArr.length; i++){
        if (splitArr.includes(word)){
            return true;
        }else{
            return false;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // addFriend() : Should take a name and an object and add the name to the object's friends array then return the object (2, 0, 2)
    // push into an array
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise (3, 0, 3)
    // if statement, name is friend of said object return true
    // else is returning false 
    // need to fix my control flow prob getting last 2/3 right
    // can i compare an array and a string?
    // should i loop over the array then compare? idk im stupid
    if (object.friends){
        for( var i = 0; i < object.friends.length; i++){
            if(object.friends[i] === name){
                return true;
            }
        }
    } return false;
    
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with (3, 0, 3)
    // compare statement
    // return list of names not boolean. trying to figure out .filter method
    // is looping over the array necessary? just need to pull out a single name im getitng a return of multiple
    // am i filtering right? how do i return a whole list of names 
    // .map the filtered results into new array?
    var notFriends = [];
    for (var i = 0; i < array.length; i++){
        if(!isFriend(name, array[i]) && name !== array[i].name){
         notFriends.push(array[i].name);
        }
    }return notFriends;
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    /*updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. 
    If <key> does not exist on <object> create it. (3, 0, 3)*/
    // looping through object with for in loop? no ur dumb
    // return something
    object[key] = value;
    return object; 
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    /*removeProperties() : Should take an object and an array of strings. 
    Should remove any properties on <object> that are listed in <array> (2, 1, 3)*/
    // array methods we gonna use that
    // compare object to array?
    // this one is hurtin my brain. dk where to start
    for(var key in object){
        
    for (var i = 0; i < array.length; i++){
        
     if(array[i] === key){
        delete object[key];
    }
    }
    } return object;
        }
    


//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // dedup() : Should take an array and return an array with all the duplicates removed (2, 0, 2)
    return array.filter(function(element, i, array){
        return array.indexOf(element)=== i;
    })
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}