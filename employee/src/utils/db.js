const mongoose = require('mongoose');
require("dotenv").config()

const connectDB =  () => {
    
        mongoose.connect(process.env.DB_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
         
        }).then(()=>{
            console.log('MongoDB connected');
        }).catch((e)=>{console.log(e)});
        
     
    }
  module.exports = connectDB;