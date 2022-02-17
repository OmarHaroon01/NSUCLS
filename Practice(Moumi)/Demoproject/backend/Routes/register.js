const express = require("express");
const router = express.Router();
const userData = require("../Database/userData");

router.get("/users", async (req, res) => {
  const users = await userData.find();
  res.json(users);
});

router.post("/register", async (req, res) => {
  const newUser = await new userData(req.body);

  userData.exists({ userName: req.body.userName }, function (err, obj) {
    if (err) {
      return res.status(400).json({
        data: "",
        error: "Check userName",
      });
    }
    if (obj) {
      return res.json({
        data: "",
        error: "This user name is already taken.",
      });
    } else {
      userData.exists({ email: req.body.email }, async function (err, obj) {
        if (err) {
          return res.status(400).json({
            data: "",
            error: "Check email",
          });
        }
        if (obj) {
          return res.json({
            data: "",
            error: "This email is already registered.",
          });
        } else {
          const user = await newUser.save();
          res.json({
            data: "Congrats! Your account has been registered successfully.",
            error: "",
          });
        }
      });
    }
  });
});

module.exports = router;
