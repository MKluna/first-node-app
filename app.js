const path = require('path');
const os = require('os');
const fs = require('fs');
const logger = require('./logger');

let pathObj = path.parse(__filename);
let freeMems = os.freemem();
let totalMem = os.totalmem();
let rootDir = fs.readdirSync('./');


/* fs.readdir('./',(err,files)=>{
    (err)?console.log(err):console.log(files);    
}) */












/* const url = logger.url; */
/* ************************** */
/* logger.log('Matias');    * */
/* console.log(url);        * */
/* sayHello('Matias');      * */
/* console.log(module);     * */
/* ************************** */