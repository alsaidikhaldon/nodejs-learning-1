const net = require('net');


var server = net.createServer((socket) =>{
     socket.write("******** hiiii im the server .. you are connected now ... thank you!!! ");
    });

server.on('error',(err)=>{
    throw err;
});

server.on('connection', function (socket) {

  

    console.log('____________________________**** on connection ****_____________________________________');

    var clientport = socket.remotePort;
    var clientaddr = socket.remoteAddress;
    var clientfamily = socket.remoteFamily;

    console.log('REMOTE Socket is listening at port' + clientport);
    console.log('REMOTE Socket ip :' + clientaddr);
    console.log('REMOTE Socket is IP4/IP6 : ' + clientfamily);


    console.log('____________________________**** on data ****_____________________________________');
    socket.on('data',(data) => {
        var bread = socket.bytesRead;
        var bwrite = socket.bytesWritten;
        console.log('Bytes read : ' + bread);
        console.log('Bytes written : ' + bwrite);
        console.log('Data sent to server : ' + data);
      });

  

});



server.listen(17000,() =>{
    address = server.address();
    console.log(" listening at port : ", server.address());
    

});

