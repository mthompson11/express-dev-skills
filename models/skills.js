const skills = [
    {id: 1, skill: 'JavaScript',years: 0, bootCamp: true},
    {id: 2, skill: 'Python', years: 5, bootCamp: false},
    {id: 3, skill: 'Docker', years: 1, bootCamp: false},
    {id: 4, skill: 'Octopus', years: 0, bootCamp: false},
    {id: 5, skill: 'Express', years: 0, bootCamp: true},
    {id: 6, skill: 'Flexbox', years: 0, bootCamp: true},
    {id: 7, skill: 'Git', years: 3, bootCamp: false},
    {id: 8, skill: 'JQuery',years: 0, bootCamp: true},
    {id: 9, skill: 'Flask',years: 3, bootCamp: false}
];

function getAll(){
    return skills;
};

function getOne(id){
    id = parseInt(id);
    return skills.find(function(skill){
        return  skill.id === id;
    })
};

module.exports = {
    getAll,
    getOne
};