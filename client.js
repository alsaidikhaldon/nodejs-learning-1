const net = require('net');



var client = net.createConnection({ port: 17000 }, () => {
    console.log('Client: connection established with server');
    console.log('---------client details -----------------');
    var address = client.address();
    var port = address.port;
    var family = address.family;
    var ipaddr = address.address;
    console.log('Client is listening at port' + port);
    console.log('Client ip :' + ipaddr);
    console.log('Client is IP4/IP6 : ' + family);
    client.write("whats upppppp im happy client\n")
    
});



client.on('data', (data) => {
   
    console.log('data from server ip :' + client.remoteAddress + ': ' + data.toString());
    client.end();
});

client.on('end', () => {
    console.log("**************  disconnected from client *************");
  });

  