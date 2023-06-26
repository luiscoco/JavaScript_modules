console.log('the code in the exporter module code is evaluated!');
/*
code in module is evaluated only once on first import
this is why this message will be shown only once, though this module is imported many times

changes in this module will be visible to all the modules that import it, i.e. the module is passed by reference
*/

// ~ variable export
export const a = {
	message: 'Hello from A!',
};

export const renameMe = 'I want to be renamed';

// ~ function export
export function funcA() {
	console.log('I am logged by function in Exporter module!');
}
// we cannot export an anonymous function this way; it needs a name so that we can address it when importing

// 🕮 <cyberbiont> d806ed00-5fe9-4f83-8ad8-beb0bffe71fe.md
function sayHi(user) {
	console.log(`Hello, ${user}!`);
}

export { sayHi }; // list of exported variables

// 🕮 <cyberbiont> 684564b6-d87f-4d50-98b3-61ef58e8a3e3.md

// # default export
// usually main class or function is exported as default
// module can have only one default export

export default class Exporter {
	constructor(name) {
		this.name = name;
	}

	method() {
		console.log('Hello from Exporter class');
	}
}

// ~ with default export name is not required
/* in case of default we can use an anonymous function
because the value exported as default will be written into the 'default' property of exported object
and we'll be able to import it under the 'default' name */

// export default () => {
//   console.log('I am born in module A!');
// }

// export default 'I am default export from A';

// export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ~ technically, we can export existing value as default
// export { sayHi as default }
