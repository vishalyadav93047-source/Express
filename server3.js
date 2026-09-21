const express = require('express')
const server = express();


// Simple routing

// server.get('/', (req, res)=>{
//     res.send("Home")
// })


// Multiple Routing Parameters

// server.get('/students/:class/:roll', (req, res)=>{

    // for Single Routing Parameters

//     // const studentId = req.params.

// for Multiple Routing Parameters

//     const {class: studentClass, roll}= req.params



//     res.send(`Student Class: ${studentClass} and Roll: ${roll}`);
// })


// Practical Example with Data

// const students = [
//     {id:1, name: "Radhe"},
//     {id:2, name: "Shyam"},
//     {id:3, name: "Mohan"}
// ];


// server.get("/student/:id", (req, res)=>{

//     const id = Number(req.params.id);

//     const student = students.find(s => s.id==id )


//     if(!student){
//         return res.send(404)
//        }else{
//         res.send(student)
//        }
// })




// server.get('/product', (req, res)=>{

//     res.send(`Category: ${req.query.category}`)
// })



server.listen(9000, ()=>{
    console.log("Server is runing on port no 9000.");
    
})