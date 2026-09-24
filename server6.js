const express = require("express");
const dotenv = require("dotenv");

const connectdb = require('./config/db');

dotenv.config();

const server =express();



connectdb();


server.use(express.json())


server.get('/',(req,res)=>{
    res.send("hello")
})





server.listen(9000 , ()=>{
    console.log("server is frunning on port no 9000.");
    
})