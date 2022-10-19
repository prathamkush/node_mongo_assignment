// first import express, mongoose module
const express = require("express")
const mongoose = require("mongoose")

// initialize express app
const app = express()

// creating server at port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000")
})

// default route
app.use("/welcome", (req,res) => {
    res.send("I am Groot")
})



// connecting to database
const uri = "mongodb+srv://pratham520:451228@cluster0.pe7oqtx.mongodb.net/employeeNodejs?retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser:true}).
        then(() => {console.log("Database Connected")}).
        catch((error) => {console.log(error)})

