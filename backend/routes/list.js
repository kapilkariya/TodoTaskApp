const router = require("express").Router();
const user = require("../models/user")
const List = require("../models/list");


//adding task
router.post('/addtask', async (req, res) => {
  try {
    console.log('s1')
    const { title, body, id } = req.body;
    const existinguser = await user.findById(id);
    if (existinguser) {
      const list = new List({ title, body, user: existinguser });
      await list.save().then(()=>{res.status(200).json({list})});
      existinguser.list.push(list);
      existinguser.save();
      console.log("done")
    }
  } catch (error) {
    console.log(error);
  }
})

//update
// router.put('/updatetask/:id', async (req, res) => {
//   try {
//     const { title, body, email } = req.body;
//     const existinguser = await user.findOne({ email });
//     if (existinguser) {
//       const list=await List.findByIdAndUpdate(req.params.id,{title,body})
//       list.save().then(()=>res.status(200).json({message:"task updated"}));
//     }
//   } catch (error) {
//     console.log(error);
//   }
// })

//delete
router.delete('/deletetask/:id', async (req, res) => {
  try {
    const {id} = req.body;
    const existinguser = await user.findByIdAndUpdate(id,{$pull:{list:req.params.id}})
    if (existinguser) {
      await List.findByIdAndDelete(req.params.id)
      return res.status(200).json({messge:"task deletedd"})
    }
    return res.status(200).json({messge:"user not found"})
  } catch (error) {
    console.log(error);
  }
})


//gettask 

router.get('/gettask/:id',async(req,res)=>{
  try {
    const list=await List.find({user:req.params.id})
    if(list.length!==0){
      res.status(200).json({list:list});
    }
    res.status(200).json({message:"no task "});
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;