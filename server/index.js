const express = require('express');
const app = express()
const http = require('http');
const cors = require('cors');
const {Server} = require("socket.io");

app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
});

io.on("connection", (socket)=>{
    console.log("USER_ID: "+socket.id);
    socket.on("disconnect",()=>{
        console.log("Disconnected" + socket.io);
    })
})




server.listen(3001, ()=>{
    console.log("SERVER Started");
});