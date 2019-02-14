/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal ={};
animal.species = 'dog';
animal['name'] = 'Ryder';
animal['noises'] = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0]= 'Woof'
noises.push('Bark');
noises.unshift('Fart');
noises[noises.length] = 'Boom';
console.log(noises[3]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
noises.push('Wahhh');
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);
// console.log(animals);
var duck = {
    species: 'duck',
    name: 'Podrick',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
}
animals.push(duck);
console.log(animals);
var cat = {
    species: 'cat',
    name: 'Sully',
    noises: ['meow', 'prr', 'hissss']
}
animals.push(cat);
var cow = {
    species: 'cow',
    name: 'Hot pie',
    noises: ['moo', 'mooooo']
}
animals.push(cow);
// console.log(animals);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
// to hold a list of strings (friends names)
function getRandom (animals){
//   debugger;
    return Math.floor(Math.random() * (animals.length - 1)) + 0
} 
// friends.push(getRandom(animals));
console.log(getRandom(animals));
console.log(animals[getRandom(animals)], 'Hey');
// put the name value of random animal  into friends array
// .push a reference into friends array
friends.push(animals[getRandom(animals)].name);
console.log(animals, 'sup');
animals[getRandom(animals)]['friends'] = friends;
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
