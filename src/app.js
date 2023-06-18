const express = require("express");
const app = express();
const port =8000
require("../src/db/conn")
const MensRanking = require("../src/models/mens")
const mensRouter = require("./routers/men")
app.use(express.json());
app.use(mensRouter);
app.listen(port,()=>{
    console.log("listening");
})
