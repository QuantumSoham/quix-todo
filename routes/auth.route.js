const router=require("express").Router();
const User=require("../models/user.models.js");
const bcrypt=require("bcrypt");

//sign up
router.post("/register",async(req,res)=>{
    try {
        const {email,username,password}=req.body;
        const hashedPassword=await bcrypt.hash(password,12);
        const user=new User({email:email,username:username,password:hashedPassword});
        await user.save().then(()=>{
            res.status(200).json({user:user});
        })
    } catch (error) 
    {
        res.status(400).json({message:"User already esists "});
    }
}
);

//sign in
router.post("/signin",async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email});
        if(!user)
        {
            res.status(400).json({message:"Please Sign up!"});
        }
    
        const isPasswordCorrect=bcrypt.compareSync(
            req.body.password,
            user.password,12
        );
        if(!isPasswordCorrect)
        {
            res.status(400).json({message:"Invalid Password!"});
        }
        const {password,...others}=user._doc;
        res.status(200).json({others}); 
    } 
    catch (error) {
    res.status(500).json({ message: "Something went wrong. Please try again later." });
        }
    


}
);
module.exports=router;