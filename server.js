const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const http = require("http")
let app = express()





app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.post("/form/",(req,res)=>{
    mongoose.connection.db.collection("portfolio-website-messages").insertOne(req.body).then(()=>{
       console.log("uploaded data :" ,req.body )
        res.send("uploaded succesfully !")
    }).catch(()=>{
        res.sendStatus(500)
        res.send("internal server error!")
        console.error("internal server error!")
    })
  

})

{
    
    let dbconnected  = false
    
    mongoose.connect("mongodb+srv://mongoadmin:mongoadmin@cluster0.exxx1cv.mongodb.net/sathvik?retryWrites=true&w=majority")
    
    mongoose.connection.on("connected",()=>{
    dbconnected = true
    console.log("db connected!");
    let server = http.createServer(app)
    server.listen(8080)
    })
    mongoose.connection.on("error",()=>{
    dbconnected = false
    console.error("db error :(");
    })
    
    
    }
    

