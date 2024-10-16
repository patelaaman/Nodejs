const mongoose = require("mongoose")

const stuSchema = new mongoose.Schema({
    rollno:{
        type:"Number",
        require:true
    },
    name:{
        type:"String",
        require:true
    },
    city:{
        type:"String",
        require:true
    },
    clas:{
        type:"Number",
        require:true
    },
})

module.exports =mongoose.model("student",stuSchema)