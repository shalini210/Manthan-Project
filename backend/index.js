const dbconfig = require("./config/dbconfig")
const demoRouter = require("./routes/demoRouter")
const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>
{
    res.send("use /demo for demo ")
})
app.use("/demo",demoRouter)
app.listen("8080",()=>console.log("server running on localhost:8080"))