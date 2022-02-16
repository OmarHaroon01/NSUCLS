const express = require('express');
const router = express.Router();
const RegisterDetails = require('../Models/register');

router.get('/user', async (req, res) => {
    const user = await RegisterDetails.find();
    res.json(user);
})

router.get('/user/:id', async (req, res) => {
    RegisterDetails.findOne(
        {_id: req.params.id},
        (err, obj) => {
            if(err){
                return res.json({msg: 'ID not found!!'});
            }
            res.json(obj);
        }
    )
})

router.post('/', async (req, res) => {
    const newUser = new RegisterDetails(req.body);
    const user = await newUser.save();
    res.json(user);
})

module.exports = router;