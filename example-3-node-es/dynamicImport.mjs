// # imported modules are loaded asynchronously

// import('./exporter.mjs') returns a promise;

async function loadModule() {
	// ~ using await
	const { a, funcA, default: Exporter } = await import('./exporter.mjs');
	console.log(a.message);
	console.log(Exporter);

	// ~ using then
	// import('./exporter.mjs').then(({ a: a, default: Exporter }) =>
	// 	console.log(Exporter)
	// );
}

// 🕮 <ltc> db62523a-3442-4542-9b06-7fd151d412f2.md

loadModule();
// e.g. we can use dynamic import to load the module only for devices with a certain viewport width

// if (matchMedia('screen and (min-width: 600px')) {
// 	loadModule();
// }
