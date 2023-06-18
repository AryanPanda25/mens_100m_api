const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

router.post("/mens",async(req,res)=>{
    try{
        const user = new MensRanking(req.body);
        const result = await user.save();
        res.status(201).send(result);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
})
router.get("/",(req,res)=>{
    res.send("Hello from server");
})
router.get("/mens",async (req,res)=>{
    try{
        const result=await MensRanking.find().sort({"ranking":1});
        res.send(result);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});
router.get("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const result=await MensRanking.findById(_id);
        res.send(result);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
})
router.patch("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const result=await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(result);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
})
router.delete("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const result=await MensRanking.findByIdAndDelete(_id);
        res.send(result);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
})

module.exports=router;