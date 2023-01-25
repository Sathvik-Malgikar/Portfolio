let dbconnected  = false

import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mongoadmin:mongoadmin@cluster0.exxx1cv.mongodb.net/sathvik?retryWrites=true&w=majority")

mongoose.on("connected",()=>{
dbconnected = true
console.log("db connected!");
})
mongoose.on("error",()=>{
dbconnected = false
console.error("db error :(");
})

