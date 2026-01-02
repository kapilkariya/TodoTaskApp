require("dotenv").config();
const express= require("express")
const app= express()
const cors=require("cors");


const auth= require("./routes/auth");
const list=require("./routes/list")
app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{
  res.send("hhello")
})

app.use("/api/v1",auth);
app.use("/api/v2",list);

app.listen(process.env.PORT,()=>{
  console.log("server started")
})