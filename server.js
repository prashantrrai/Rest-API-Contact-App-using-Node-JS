const express = require("express");
const dotenv = require('dotenv').config()

const app = express();

const port = process.env.PORT;

// app.get('/api/contacts', (req,res) => {
//     // res.send("get all conatcts")
//     // res.json({message:"prashnat"})
//     // res.json({name:"prashnat",email:"prashnat",rollno:"prashnat"})
//     res.status(201).json({message:"Hello Munna"})
// })  



app.use(express.json())
//this app.use is a inbuilt middleware in express and we are using this middleware in our express project
app.use('/api/contacts', require("./routes/contactRoutes"))


app.listen(port, () => {
    console.log(`Server connected Successfully on port ${port}`)
})
