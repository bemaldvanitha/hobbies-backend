const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();

// @route POST api/hobbies
// @desc add hobby
// @access Private
router.post('/',(req,res) => {

})

// @route GET api/hobbies
// @desc get all hobbies
// @access Public
router.get('/',(req,res) => {

});

// @route PUT api/hobbies/:id
// @desc edit hobby
// @access Private
router.put('/:id',(req,res)=> {

});

// @route DELETE api/hobbies/:id
// @desc delete hobby
// @access Private
router.delete('/:id',(req,res)=> {

});

module.exports = router;