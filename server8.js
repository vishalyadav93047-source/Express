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



// ======================== READ ========================

// Get All Students
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();

        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Single Student By ID
app.get("/students/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student Not Found",
            });
        }

        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


 

// PUT => Complete Update
app.put("/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                course: req.body.course,
                fee: req.body.fee,
            },
            { new: true }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student Not Found",
            });
        }

        res.json({
            message: "Student Updated Successfully",
            student,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// PATCH => Partial Update
app.patch("/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student Not Found",
            });
        }

        res.json({
            message: "Student Patched Successfully",
            student,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// ======================== DELETE ========================

app.delete("/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student Not Found",
            });
        }

        res.json({
            message: "Student Deleted Successfully",
            student,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// ======================== SERVER START ========================

app.listen(8000, () => {
    console.log("Server Running on Port 8000");
});

 