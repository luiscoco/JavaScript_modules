import Exporter from './exporter.mjs';

console.log(import.meta);

const exporter = new Exporter('example class import');
exporter.method();
console.log(exporter.name);

/*
Specification officially recommends to use default import / export if possible (if one thing is exported)
But it has downsides:
it is technically possible to have different names for the same thing, which may lead to confusion

so it is a good practice as least make default import names to correspond the file names
renaming the exported thing won't affect it's default import name - so you lose refactoring power
*/
