// const path = require('node:path');

// const myPath = 'C:/projects/nodejs/index.js';

// // const pathBasename = path.basename(myPath);
// const pathExtName = path.extname(myPath);

// console.log('pathBasename: ', pathExtName);

/**
 * os.platform() return os platform name
 *
 * os.homedir() method return home directory name.
 * os.freemem() method return free memory on my computer.
 * os.cpus() method return computer os cpu details.
 *
 *
 */
// const os = require('os');

// console.log(os.cpus());

/**
 * doc inside file systems
 * first required fs object `require("fs")`
 *
 * fs.writeFileSync() method doc
 * https://nodejs.org/docs/latest/api/fs.html#fswritefilesyncfile-data-options
 *
 * fs.appendFileSync() method doc
 * https://nodejs.org/docs/latest/api/fs.html#fsappendfilesyncpath-data-options
 *
 * fs.readFileSync() method return binary
 * https://nodejs.org/docs/latest/api/fs.html#fsreadfilesyncpath-options
 *
 */

// const fs = require('fs');

// fs.writeFileSync(
//     './myText.txt',
//     'hello write use node js fs writeFileSync method.'
// )

// const filePath = 'C:/projects/nodejs/myText.txt';
// const result = fs.readFileSync(filePath);

// console.log('isFileAppend: ', result.toString());

/**
 *
 * events is an class so you need to call the event.
 *
 *
 */

// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('call', (caller) => {
//     console.log('Hia you phone is ring ' + caller);
// });

// emitter.emit('call', 'seemol');

/**
 *
 *   const http = require("http")
 *
 *
 *
 */

// const http = require('http');

// const server = http.createServer((request, response) => {
//     response.write('hello iam node server request');
//     response.write('more responser');

//     // console.log('request: ', request);
//     // console.log('response: ', response);
//     response.end();
// });

// const port = 3000;

// server.listen(port);

// console.log('learning port 3000');
