const app = require('express');
const http = require('http');
const server=http.createServer(app)
const io = require('socket.io')(server);


io.on('connection',(client)=>{
    console.log(`New client is connected and clientId is ${client.id}`);
    client.on('msg',(data)=>{ 
        console.log(data)
        // io.to(client.id).emit(`res`,`${data} from server side`)
        io.emit(`res`,data);
        

    })
    
}
)

server.listen('1212',()=> console.log('server running on 1212'))