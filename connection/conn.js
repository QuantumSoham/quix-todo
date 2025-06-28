const mongoose=require("mongoose");

const conn=async(req,res)=>{
    try {
        await mongoose.connect("mongodb+srv://chatterjeesoham2003:PquPBt84GHWAZrT0@cluster0.w2htsdk.mongodb.net/").then(()=>{
            console.log("connected to database");
        });
    } catch (error) {
        console.log("Error connecting to MongoDb:",error);
        res.status(400).json({
            message:"Error connecting to MongoDb",
            error:error
        });
    };
};

conn();