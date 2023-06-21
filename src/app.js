const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({path:"../config.env"});
const port = process.env.PORT ;
require("../src/db/conn");

const MensRanking = require("../src/models/mens");
const mensRouter = require("./routers/men");
app.use(express.json());
app.use(mensRouter);
app.listen(port,()=>{
    console.log(`APP is running on port no ${port}`);
})
