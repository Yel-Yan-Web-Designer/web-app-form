const express = require('express');
const router = express.Router();

const {
    getPeople,
    createPeople,
    CreatePostman,
    updatePerson,
    removePerson
} = require('../controllers/people');

// router.get('/', getPeople);
// router.post('/', createPeople);
// router.post('/postman', CreatePostman);
// router.put('/:id', updatePerson);
// router.delete('/:id', removePerson);

router.route('/').get(getPeople).post(createPeople);
router.route('/postman').post(CreatePostman);
router.route('/:id').put(updatePerson).delete(removePerson);

module.exports = router;