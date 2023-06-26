'use strict';
globalThis.a = 'hello from A!';

console.log('variable from B in A globalThis', globalThis.b); // undefined, because script B wasn't executed yet
// console.log('variable from B in A', b)
