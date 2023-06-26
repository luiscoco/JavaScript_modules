// we can import everything at once in one object
import * as moduleA from './exporter.mjs';

// then that object will serve as a namespace and we'll need to access our imports as properties of module, using dot syntax, like

console.log(moduleA);
console.log(moduleA.a.message);
moduleA.funcA();
moduleA.sayHi();

// ~ we won't be able to rename individual imports
console.log(moduleA.renameMe);
console.log('default:', moduleA.default);

// 🕮 <ltc> d4cef24a-287f-4ceb-852f-4cef8d989733.md
