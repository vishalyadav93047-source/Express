const express = require('express')
const server = express();


// //APPLICATION MIDDLEWARE
// let user = false
// server.use((req,res , next)=>{
  
//     if(user){
//         console.log("yes this is working....");
//         next();
//     }else{
//         console.log("plz");
        
//     }
// })



//  ROUTING LEVEL
function func1(req,res,next){
    console.log("hello , i'm working");
    
}
// function func2(req,res,next){
//     console.log("hello , i'm working");
    
// }
server.get('/',func1 , (req,res)=>{
    res.send("server is runing")
})
server.post('/',func1 , (req,res)=>{
    res.send("data posted")
})
server.put('/', (req,res)=>{
    res.send("data updated")
})
server.delete('/', (req,res)=>{
    res.send("data deleted")
})
server.get('/about', (req,res)=>{
    res.send("about is runing")
})
server.get('/contact',(req,res)=>{
    res.send("contact is runing")
})




server.listen(9000,()=>{
    console.log("server is running on port no 9000");
    
})