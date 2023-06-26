const config = require('./config');

require('./configChanger');
require('./configChanger'); // will not be executed second time

setTimeout(() => console.log('Final config', config));

// run this file to see the config value increased
// 🕮 <ltc> f01e5638-8db5-4b9c-ae5f-9d37f933aa8d.md
