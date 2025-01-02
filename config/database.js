const mongoose = require("mongoose")
const dotenv=require('dotenv')
const path=require('path')
dotenv.config({path:path.join(__dirname,'config.env')})

const connectToDB = async () => {
    try {
      await mongoose.connect(process.env.DB_URL);
      console.log(`Connected to MongoDB: ${mongoose.connection.host}`);
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
      process.exit(1);
    }
  };

  module.exports=connectToDB;