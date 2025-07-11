const demoModel = require("../models/demoModel")
exports.Insertdemo=async (o)=>
{
    let data={} ;
    let newdemo = new demoModel({
        name:o.name,
        age:parseInt(o.age)
    })
   await newdemo.save()
    .then(()=>data.msg ="Record saved")
    .catch((err)=>data.msg =err)
    return data
}
exports.UpdateDemobyID=async (id,newdata)=>
{
    let data ={};    
await   demoModel.findByIdAndUpdate(id,newdata)
    .then((d)=>{
        data.msg ="record Updated"
        data.demo = d
    })
    .catch((e)=>data=e);
    
    return data
}
exports.DeleteDemobyID = async (id) =>
{
    let data = {};
    await demoModel.findByIdAndDelete(id)
    .then((d)=>
    {
        data.msg =" record Deleted"
    })
    .catch((err)=>
    {
        data.err =err
    })
    return data 
}
exports.getDemo=async()=>
{
    let data ;
    await demoModel.find()
    .then((d)=>data=d)
    .catch((err)=>data=err)
    return data
}
exports.getDemobyName =async(n)=>
{
     let data ;
    await demoModel.find({name:n})
    .then((d)=>data=d[0])
    .catch((err)=>data=err)
    return data
}