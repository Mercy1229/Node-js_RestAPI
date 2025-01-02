const express=require("express")
const app=express()
const dotenv=require('dotenv')
const path=require('path')
const connectToDB = require("./config/database")
const user=require("./routes/route")
dotenv.config({path:path.join(__dirname,'config','config.env')})

connectToDB()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/',user)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} ...`);
  });