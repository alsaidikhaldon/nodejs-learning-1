const dns = require('dns');


// dns.lookup('tmr.tn',(err,address,family) => {
//     console.log("address : " + address);
//     console.log("family : " + family);
// });

dns.lookupService('54.36.91.62',4,(err,hostname,service) => {
    console.log("host name : " + hostname);
    console.log("service : " + service);
});