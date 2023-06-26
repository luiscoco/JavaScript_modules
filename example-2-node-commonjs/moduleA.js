// # exports

exports.message = 'Hello from A!';

exports.objectFromA = {
	prop: 12,
};

const unexportedVar = 'something';

console.log('Module A is executed!');

/* In fact we are exporting the object, properties of which we set with exports[name] syntax */

// # module exports
/* We can also use module.exports syntax to set all the exported properties at once */

/* module.exports = {
	message: 'Hello from A!',
	objectFromA: {
		prop: 12,
	},
}; */
