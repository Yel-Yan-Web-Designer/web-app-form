const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name } = req.body;

    return res.status(200).send(`Welcome ${name}`)
}) 

module.exports = router;