let {people} = require('../data');

// GET METHOD
function getPeople (req, res){
  return  res.status(200).json({success : true , data : people})
}

// POST METHOD FROM JAVASCRIPT FILE
function createPeople (req, res) {
    const { name } = req.body;

    if(!name){
        return res.status(400).json({
            success : false,
            msg : 'Please provide the name value!'
        })
    }
    return res.status(201).json({success : true, newperson : name})
}

// POST METHOD FROM POSTMAN
function CreatePostman (req, res){
    console.log(req.body);
    return res.status(200).json({success : true , data : [...people, req.body]})
}


// PUT METHOD
function updatePerson (req, res){
    const { id} = req.params;
    const { name } = req.body;

    const addNewPerson = people.find(person => {
        if(person.id === Number(id)){
            return person.name = name
        }
    })

    return res.status(201).json({success : true, people});
}

// DELETE METHOD
function removePerson (req, res){
    const {id} = req.params;
    const person = people.find(person => person.id === Number(id));

    if(!person){
        return res.status(400).json({
            success : false,
            msg : `Person with id ${id} is not exist`
        })
    }

    
    const deletePerson = people.filter(person => {
        if(person.id !== Number(id)){
            return person
        }
    })
    return res.json({success : true, data : deletePerson})
}

module.exports = {
    getPeople,
    createPeople,
    CreatePostman,
    updatePerson,
    removePerson
}