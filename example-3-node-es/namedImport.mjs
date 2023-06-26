/*
all imports should be declared at the top (root) level of the file
usually on top (because imports, being executed during parse time, are 'hoisted' anyway)
*/

/* we can use curly brackets to pick what we want to import, the syntax resembles object destructuring
we can provide different name for variable, using 'as' keyword */
import { a, funcA, renameMe as newName, sayHi } from './exporter.mjs';

console.log(a.message);
funcA();
console.log(newName);
sayHi();

// import.meta.url contains current module's url
console.log(import.meta);
