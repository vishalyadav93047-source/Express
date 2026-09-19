const express = require('express')

const server = express();

server.get('/' , (req , res)=>{
        res.send("server is running properly")
})

server.post('/' , (req , res)=>{
        res.send("data posted")
})

server.put('/' , (req , res)=>{
        res.send("data update")
})

server.delete('/' , (req , res)=>{
        res.send("data deleted")
})





server.listen(9000,()=>{
    console.log("server is running on port no 9000");
    
})