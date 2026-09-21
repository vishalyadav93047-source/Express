const express = require('express')
const mongoose = require("mongoose")

const server = express();

const dburl =  `mongodb+srv://VISHAL:VISHAL1@cluster0.qttpv8e.mongodb.net/VishalLMS`

mongoose.connect(dburl)
.then(()=>{console.log("Database Connected");
}).catch((err)=>{
    console.log("Error",err); 
    
})

server.get('/', (req, res)=>{
    res.send("Hello") 
})


server.listen(9000,()=>{
    console.log("server is running on port no 9000");
    
})