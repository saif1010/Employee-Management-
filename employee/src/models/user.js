const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    age:{
        type: Number,
        
    },
    location:{
        type:String,

    }
});


const Employee = mongoose.model('employee', userSchema)

module.exports = Employee;