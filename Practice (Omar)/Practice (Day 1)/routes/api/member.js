const express = require('express');
const router = express.Router();
const members = require('../../Members');


//Gets all Member
router.get('/', (req, res)=>{
    res.json(members);
});

//Get a single Member
router.get('/:id', (req, res)=>{
   res.json(members.filter(members => members.id === parseInt(req.params.id)));
});

//Add a member
router.post('/', (req, res)=>{
    const newMember = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
    }

    if (!newMember.age || !newMember.id || !newMember.name){
        return res.status(400).json({msg: 'Please fill up form'});
    }

    members.push(newMember);
    res.json(members);
});

//Update Member
router.put('/:id', (req, res)=>{

    var idx = members.findIndex(member => member.id == req.params.id);

    if (idx == -1){
        return res.status(400).json({msg: 'ID not found'});
    }

    members[idx].id = req.body.id;
    members[idx].name = req.body.name;
    members[idx].age = req.body.age;

    res.json(members);
    
});

//Delete Member
router.delete('/:id', (req, res)=>{

    var idx = members.findIndex(member => member.id == req.params.id);

    if (idx == -1){
        return res.status(400).json({msg: 'ID not found'});
    }

    members.splice(idx,1);

    res.json(members);
})


module.exports = router;

