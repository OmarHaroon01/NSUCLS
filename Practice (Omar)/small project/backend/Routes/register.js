const express = require("express");
const router = express.Router();
const RegisterModel = require("../Models/register");
const nodemailer = require('nodemailer');

function emailVerification(newUser){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hatirjheel1997@gmail.com',
      pass: 'banorerkabab2323'
    }
  });
  var mailOptions = {
    from: 'hatirjheel1997@gmail.com',
    to: newUser.email,
    subject: 'Verify Email',
    text: 'http://localhost:8000/verifyEmail/' + newUser._id,
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}






router.get("/users", async (req, res) => {
  const users = await RegisterModel.find();

  res.json(users);
});

router.post("/register", (req, res) => {
  RegisterModel.exists(
    {
      email: req.body.email,
    },
    (err, obj) => {
      if (err) {
        res.status(400).json({
          data: "",
          error: "Register Error",
        });
      } else {
        if (obj) {
          res.json({
            data: "",
            error: "Email Already Registered",
          });
        } else {
          const newUser = new RegisterModel(req.body);
          newUser.save();
          emailVerification(newUser)
          res.json({
            data: "Email Registered Successfully",
            error: "",
          });
        }
      }
    }
  );
});

router.get('/verifyEmail/:id', (req,res) => {
  RegisterModel.findOne({
    _id: req.params.id
  },
  (err,obj)=>{
    if (obj){
      obj.isVerified = true;
      obj.save();
      res.json({
        data: "Email Verified",
        error: ""
      })
    }
  }) 
})

module.exports = router;
 