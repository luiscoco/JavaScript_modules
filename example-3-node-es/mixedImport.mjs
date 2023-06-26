import def, { a, funcA } from './exporter.mjs';
// same as
// import { a, default as def, funcA } from './exporter.mjs';

console.log(a.message);
funcA();

console.log(def);
