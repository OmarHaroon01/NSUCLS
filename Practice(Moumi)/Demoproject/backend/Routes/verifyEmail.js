const express = require("express");
const router = express.Router();
const userData = require("../Database/userData");
const nodemailer = require("nodemailer");

function VerifyEmail(obj) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hatirjheel1997@gmail.com",
      pass: "banorerkabab2323",
    },
  });

  const link = "http://localhost:8000/verifyLink/" + obj.id;
  const mailOptions = {
    from: "hatirjheel1997@gmail.com",
    to: obj.email,
    subject: "Please click the link to verify your account",
    text: link
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

router.post("/verifyEmail", async (req, res) => {
  const newUser = await new userData(req.body);
  userData.findOne(
    //returns object
    { email: req.body.email },
    function (err, obj) {
      if (err) {
        return res.status(400).json({
          data: "",
          error: "Check userName",
        });
      }
      if (obj) {
        VerifyEmail(obj);
        return res.status(200).json({
          data: "Email has been sent. Please check!",
          error: "",
        });
      } else {
        res.json({
          data: "",
          error: "Email not registered!"
        });
      }
    }
  );
});

router.get('/verifyLink/:id', (req, res) => {
  userData.findOne({_id: req.params.id}, 
    function(err, obj){
      if(!obj){
        res.json({
          data: "",
          error: "Not the correct link"
        })
      }else{
        obj.active = true;
        obj.save();
        res.json({
          data: "Email verified successfully!",
          error: ""
        })
      }
    })
});
module.exports = router;
