const router = require("express").Router();
const user = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


//sign in 

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashpassword = bcrypt.hashSync(password);
    const usr = new user({ email, username, password: hashpassword });
    await usr.save().then(() =>
      res.status(200).json({ message: "signed upp successfully" })
    )
  } catch (error) {
    res.status(200).json({ message: 'user exits' })
  }
})


//log  in

router.post("/signin", async (req, res) => {
  try {
    const usr = await user.findOne({ email: req.body.email })
    if (!usr) {
      res.status(200).json({ message: 'user dont exist' })
    }
    const ispasscorr = bcrypt.compareSync(req.body.password, usr.password)
    if (!ispasscorr) {
      res.status(200).json({ message: 'pass not correct ' })
    }
    const token = jwt.sign(
      { id: usr._id },
      "SECRET_KEY",
      { expiresIn: "7d" }
    )
    res.status(200).json({
      token,
      user: {
        id: usr._id,
        email: usr.email,
        username: usr.username
      }
    })
  } catch (error) {
    console.log(error)
    res.status(200).json({ message: 'user exits' })
  }
})

module.exports = router;