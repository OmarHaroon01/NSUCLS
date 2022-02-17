const express = require("express");
const router = express.Router();
const userData = require("../Database/userData");

router.post("/login", async (req, res) => {
  const user = await new userData(req.body); //is it necessary to give await here? :3 when you bring something from database(in backend) and in (frontend) when oyu do API callsuse axios
  userData.findOne(
    { userName: req.body.userName, password: req.body.password },
    function (err, obj) {
      if (err) {
        return res.status(400).json({
          data: "",
          error: "check userName and password",
        });
      }
      if (obj) {
        if(obj.active){
          res.json({
            data: "Welcome Back! You are logged in.",
            error: "",
          });
        }else{
          res.json({
            data: "Please verify your email.",
            error: "",
          });
        }
        
      } else {
        res.json({
          data: "",
          error: "Credentials don't match.",
        });
      }
      //res.json(obj) //To see if I was identified correctly
    }
  );
});

module.exports = router;
