const express = require("express")
const App = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser")
const dotenv = require("dotenv").config();
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("Database SuccesFully Connected")
})
const cors = require("cors")

const sturoute = require("./routes/stuRoute")

App.use(bodyparser.urlencoded({extended: true}));
App.use(bodyparser.json())
App.use(cors());
const port =process.env.PORT || 3000

App.use("/student",sturoute)
App.listen(port,()=>{
     console.log(`App run on Port ${port}`)
})