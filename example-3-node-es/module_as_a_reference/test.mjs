import './configChanger.mjs';
import './configChanger.mjs'; // will not be executed second time

import config from './config.mjs';

// setTimeout(() => console.log('Final config timeout', config));

console.log('Final config', config);

// run this file to see the config value increased
