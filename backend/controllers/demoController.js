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