// sometime we need to export something from another file at once (pass it through to the other module);

// we can do it with re-export syntax
export { a, funcA, sayHi, renameMe, default } from './exporter.mjs';
export { b } from './exporter2.mjs';

// same as
// import { a, sayHi, sayHi, renameMe } from './exporter.mjs';
// export { a, sayHi, sayHi, renameMe };

// ~ values won't be available locally
// console.log(sayHi); // undefined!
// there's no 'import' keyword so this variable will not be available in this file

// ~ we can re-export everything
// export * from './exporter.mjs';

// ~ converting default exports to named exports
// if we want we can re-export several defaults from different modules as named exports
// pseudo-code (modeleA and moduleB dont' exist)
// export { default as moduleA } from './moduleA.mjs';
// export { default as moduleB } from './moduleB.mjs';
