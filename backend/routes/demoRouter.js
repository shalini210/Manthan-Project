const express = require("express")
const demoController = require("../controllers/demoController")
 const router = express.Router()
 router.get("/",async(req,res)=>
{
    let data = await demoController.getDemo()
    res.send(data)
})

 router.get("/:name",async(req,res)=>
{
    let n = req.params.name
    let data = await demoController.getDemobyName(n)
    res.send(data)
})

 router.post("/",async (req,res)=>
{
    let obj = {name :req.body.name,age:req.body.age}
   let d =await demoController.Insertdemo(obj)
    res.send(d)
})
module.exports = router