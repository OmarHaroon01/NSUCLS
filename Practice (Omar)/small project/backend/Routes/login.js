const express = require("express");
const router = express.Router();
const RegisterModel = require("../Models/register");

router.post("/login", (req, res) => {
  RegisterModel.findOne(
    {
      username: req.body.username,
      password: req.body.password,
    },
    (err, obj) => {
      if (err) {
        res.status(400).json({
          data: "",
          error: "Login Error",
        });
      } else {
        if (!obj) {
          console.log("credential e Dhukse");
          res.json({
            data: "",
            error: "Credentials dont match",
          });
        } else {
          if (!obj.isVerified){
            console.log("Verification e Dhukse");
            res.json({
              data: "",
              error: "Email Address not verified",
            });
          } else {
            res.json({
              data: "Logged in Successfully",
              error: "",
            });
          }
        }
      }
    }
  );
});

module.exports = router;
