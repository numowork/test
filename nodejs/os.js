const os = require('os')
const process = require('process')

const opsys = process.platform;
console.log(os.type()); // "Windows_NT"
console.log(os.release()); // "10.0.14393"
console.log(os.platform()); // "win32"
console.log(opsys); // "win32"