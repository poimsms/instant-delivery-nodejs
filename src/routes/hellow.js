const { Router } = require('express');
const router = Router();
const { hmm } = require('./setter');

// import hmm from './setter'

let arr = [];

router.get('/hello', (req, res) => {
    arr.push('hola')
    console.log(arr, 'arr');
    hmm.set();
    res.json({ message: 'hola campeon' })
});

module.exports = router;