const router=require("express").Router();
const User = require("../models/user.models.js");
const List= require("../models/list.models.js");

// Method	Typical                 Use	Data Location
// GET	    Read/Retrieve	        URL param has id
// POST	    Create	Request         body
// PUT	    Update (replace)	    Request body + URL param has id of resource
// PATCH	Update (partial)	    Request body + URL param has id of resource
// DELETE	Delete	                URL param has id
router.post("/addtask",async (req,res)=>{
    try {
        const {title,body,email}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser)
        {
            const list=new List({title,body,user:existingUser});
            await list.save().then(()=>{res.status(200).json(list)});
            existingUser.list.push(list);
            existingUser.save();
        }
        else
        {
            res.status(404).json({"message":"Not a valid user"});
        }
    } catch (error) {
        res.status(400).json({error});
    }
});
//update
router.put("/updatetask/:id",async (req,res)=>{
    try {
        const {title,body,email}=req.body;
        const existingUser=await User.findOne({email});
        console.log(existingUser||"no email found");
        if(existingUser)
        {
            const list=await List.findByIdAndUpdate(req.params.id,{title,body});
            list.save().then(()=>res.status(200).json({message:"Task Completed"}));
        }
        else
        {
            res.status(404).json({"message":"Not a valid user"});
        }
    } catch (error) {
        res.status(400).json({error});
    }
});
//delete task
router.delete("/deletetask/:id",async (req,res)=>{
    try {
        const {email}=req.body;
        const existingUser=await User.findOne({email});
        console.log(existingUser||"no email found");
        if(existingUser)
        {     
            await User.findOneAndUpdate({email},{$pull:{list:req.params.id}});
            await List.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"Task Deleted"});
        }
        else
        {
            res.status(404).json({"message":"Not a valid user"});
        }
    } catch (error) {
        res.status(400).json({error});
    }
});
//list all tasks
router.get("/gettasks/:id",async (req,res)=>
{
    try {
        const list=await List.find({user:req.params.id}).sort({createdAt:-1});
        if(list.length != 0)
        res.status(200).json({list});
        else
        res.status(200).json({message:"No tasks yet, add some tasks"})
    } 
    catch (error) {
        res.status(400).json({error});
    }
});
module.exports=router;