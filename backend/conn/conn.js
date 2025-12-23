const mongoose= require("mongoose");

const conn=async(req,res)=>{
  try{
    await mongoose.connect("mongodb+srv://kapilkariya77_db_user:kapilkariya77@cluster0.jpburzo.mongodb.net/").then(()=>{
    console.log("connected")
  })
  }
  catch(error){
    rex.status(400).json({
      message:"not connected",
    })
  }
}
conn()