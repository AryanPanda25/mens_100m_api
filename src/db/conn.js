const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path:"../config.env"});
const url=process.env.DATABASE;
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successfully");
}).catch((e)=>{
    console.log(e);
});

