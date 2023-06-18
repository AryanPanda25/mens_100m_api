const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/olympics",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, 
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000}).then(()=>{
    console.log("connection successfully");
}).catch((e)=>{
    console.log(e);
});