const path = require('path');
const os = require('os');



console.log("the name of root folder " + __dirname);


console.log("the file name  " +__filename);


//path
console.log(path.dirname(__filename));
console.log(path.parse('/home/user/dir/file.txt'));


// os 
console.log(os.freemem());
console.log(os.endianness());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.networkInterfaces());
console.log(os.type());
console.log(os.platform());


