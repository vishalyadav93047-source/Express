const mongoose = require("mongoose");


const connectdb = async()=>{

    try{

        const conn = await mongoose.connect(process.env.Dburl);

        console.log("Mongodb Connected....");
        

    }
    
    catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectdb;