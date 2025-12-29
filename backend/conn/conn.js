const mongoose= require("mongoose");

const conn=async(req,res)=>{
  try{
    await mongoose.connect("mongodb+srv://kapilkariya77_db_user:kapilkariya77@cluster0.4nrb8fv.mongodb.net/").then(()=>{
    console.log("connected")
  })
  }
  catch(error){
   console.log(object)
  }
}
conn()