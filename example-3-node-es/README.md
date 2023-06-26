# ES6 imports

To use this syntax in Node.js, you need to give the file `.mjs` extension instead of `.js`,
or set `"type": "module"` field to `package.json`
(this will make it the default module system, and to use CommonJS you'll need to change file extension to `.cjs`

ES6 import system supports tree-shaking
ES6 import system supports cyclic dependencies

<!-- tree-shaking 🕮 <ltc> 63a0983c-bed9-4e67-92ef-870c42b877f3.md -->

With ES Modules, imports are static, which means they are executed at parse time.
This is why imports are “hoisted”. They are implicitly moved to the top of the file

- 'use strict' is always applied to modules
- if module is imported everal times, code is executed only once
- exported object is passed by reference to all importers
- import.meta contains information about current module (depends on environment, uusally url)
