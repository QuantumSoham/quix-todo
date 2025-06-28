const express=require("express");
const auth=require("./routes/auth.route.js")
const todo=require("./routes/todo.route.js");
const app=express();

const conn=require("./connection/conn.js");
const PORT=3000;

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use("/api/v1",auth);
app.use("/api/v2",todo);
app.listen(PORT,()=>{
    console.log("Server is running on port 3000");
})