const express = require('express');
const router = express.Router();
const member = require('../../Member');

//Gets all member
router.get('/', (req, res) => res.json(member));

//Get a single member
router.get('/:age', (req, res) => res.json(member.filter(member => member.age === parseInt(req.params.age))));

//Create a new member
router.post('/', (req, res) => {
    const newMember = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
    }

    if(!newMember.name || !newMember.age){
        return res.status(400).json({msg: 'Fill out both name and age of the new member'});
    }

    member.push(newMember);
    res.json(member);
});

//Update a member
router.put('/:id', (req, res) => {
     
    let i = member.findIndex(e => e.id == req.params.id);
    if(i == -1)
    {
        return res.status(400).json({msg: "Invalid id!"});
    }
    member[i].name = req.body.name;
    member[i].age = req.body.age;
    res.json(member);
})

//Delete a member
router.delete('/:id', (req, res) => {

    let i = member.findIndex(e => e.id == req.params.id);
    if(i == -1)
    {
        return res.status(400).json({msg: "Invalid id!"});
    }
    member.splice(i, 1);
    res.json(member);
})

module.exports = router;