
//using cjs
//var generateName = require('sillyname');
//var sillyName = generateName();
//console.log(`my name is ${sillyName}.`);
//using ESM
import generateName from "sillyname";
import superheroes from "superheroes"
var sillyName = generateName();
console.log(`my name is ${sillyName}.`);
const name= superheroes.random();
console.log(`My superhero name is ${name}.`);
