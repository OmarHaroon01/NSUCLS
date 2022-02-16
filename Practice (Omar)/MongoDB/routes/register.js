const express = require("express");
const router = express.Router();
const RegisterDetails = require("../Models/register");

router.get("/users", async (req, res) => {
  const users = await RegisterDetails.find();

  res.json(users);
});

router.get("/users/:id", async (req, res) => {
  RegisterDetails.findOne(
    {
      _id: req.params.id
    },
    (err, obj) => {
      if (err){
          res.status(400).json({ msg: 'ID not Found'})
      } else {
          res.json(obj);
      }
    }
  ); 
});

router.post("/register", async (req, res) => {
  const newUser = new RegisterDetails(req.body);

  const saveUser = await newUser.save();

  res.json(saveUser);
});

module.exports = router;
