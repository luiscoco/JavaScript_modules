// 'use strict' is automatically applied inside a browser module
// Each module has its own top-level scope. In other words, top-level variables and functions from a module are not seen in other scripts.

// 🕮 <ltc> a0c85ff9-7525-4ba4-be0a-61a8271262a7.md

/* meta has some information about imports, in case of browser it's script url */
console.log(import.meta); // url: "http://127.0.0.1:3000/example-4-browser/a.js"

export default {
	message: 'hello from A',
};
