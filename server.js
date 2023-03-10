const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const http = require("http")
let app = express()





app.use(express.static(__dirname+ "/public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.set("view engine" , "ejs")
app.set("views","./views")

app.post("/form/",(req,res)=>{
    mongoose.connection.db.collection("portfolio-website-messages").insertOne(req.body).then(()=>{
       console.log("uploaded data :" ,req.body )
        res.send("uploaded successfully !")
    }).catch(()=>{
        res.sendStatus(500)
        res.send("internal server error!")
        console.error("internal server error!")
    })
  

})


async function loadcategories(cats,alldocs){
   let projtits = []
    await cats.forEach( cat=>{
        let catobjs=[]

      
        let cursor = alldocs.filter(item=>item.category==cat)
        // console.log(cursor)

        cursor.forEach( (doc,i)=>{
            // console.log(doc,i);
            catobjs.push( doc)
        })
        projtits.push({"objs"  : catobjs , "category" : cat})
    })
    // console.log("before retrun" , projtits);
    return projtits
}

app.get("/projects/:name", (req,res)=>{

    if( "name" in req.params && req.params.name!=''){
        mongoose.connection.collection("portfolio-projects").findOne({"name" : req.params["name"]}).then(doc=>{
if(!doc)
{
    res.send("project document not found !")
    return
}
            console.log("param route doc",doc.name);
            res.render("projpage.ejs" , {"doc" : doc})
        })
        
    }else{
        res.send("project not found!")
    }

})


app.get("/projects/", (req,res)=>{
    
   

    let categories=["Hackathon" , "Apps"]
    mongoose.connection.collection("portfolio-projects").find().toArray().then(docs=>{
        
        loadcategories(categories,docs).then((projobjs)=>{
    
            console.log("before render" , projobjs);
            res.render("projects.ejs",{ "projobjs" : projobjs})
        })
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
    

