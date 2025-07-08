const express = require("express")
const demoController = require("../controllers/demoController")
 const router = express.Router()
 router.post("/",async (req,res)=>
{
    let obj = {name :req.body.name,age:req.body.age}
   let d =await demoController.Insertdemo(obj)
    res.send(d)
})
module.exports = router