
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/manthan_project")
.then(()=>
{
    console.log("db connected")
})
.catch((err)=>console.log(err))
 //Get the default connection
