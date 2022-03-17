const Skill = require('../models/skills')

function index (req,res){
    res.render('skills/index', {
        skills : Skill.getAll()
    })
};

function show (req, res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })
}

function newSkill (req, res){
    res.render('skills/new');
};

function create(req,res){
    Skill.create(req.body);
    res.redirect('/skills');
};

function deleteSkill(req,res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit(req,res){
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id)
    });
};

function update(req,res){
    console.log(req.body);
    res.redirect('/skills/show');
}

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}