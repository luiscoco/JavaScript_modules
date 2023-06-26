/*
To see the output:
Switch to debug console tab in lower panel (Ctrl+Shift+Y)
and press Ctrl + F5 to run the script
*/

// import is syncronous
const moduleA = require('./moduleA');

console.log('imported string:', moduleA.message);

// with desctructuring
const { objectFromA } = require('./moduleA');
console.log('imported object:', objectFromA);

// # Imports are dynamic

// ~ you can use require anywhere in the file

console.log('imported in-place:', require('./moduleA.js').message);

// ~ you can use variable for import path

const moduleName = './moduleA';
const moduleAAgain = require(moduleName);
console.log(moduleAAgain);

// # conditional imports are possible

let a;
if (Math.random > 0.5) {
	a = require('./a.js').message;
} else {
	a = 'default';
}

// # caching
// imported module is evaluated only once and the result is CACHED,
// This means that every future require for a previously loaded module throughout a program will load the same object that was loaded by the first require.
console.log(moduleA === moduleAAgain); // true
