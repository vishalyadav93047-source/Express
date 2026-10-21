const express = require('express')
const mongoose = require("mongoose")

const app = express();



//JSON DATA READ KRNE KE LIYE
app.use(express.json());




//MongoDB Connection
mongoose
.connect("mongodb+srv://VISHAL:VISHAL1@cluster0.qttpv8e.mongodb.net/VishalLMS")
.then(() => {
    console.log("MongoDB Connected");
    
})
.catch((error) => {
    console.log(error);
    
});

//Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    course: String,
    fee: Number
});


//Student Model
const Student = mongoose.model("Student", studentSchema);

//Home Route
app.post("/students", async (req, res) => {
    const student = new Student({
        name: req.body.name,
        course: req.body.course,
        fee: req.body.fee
    });

    await student.save();

    res.send("Student Added Successfully");


});


//Get All Students
app.get("/students", async (req, res) =>{
    const students = await Student.find();

    res.json(students);
});


app.listen(8000 , ()=>{
    console.log("server is frunning on port no 8000.");
    
})