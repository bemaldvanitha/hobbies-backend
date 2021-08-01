const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();

// @route POST api/hobbies
// @desc add hobby
// @access Private
router.post('/',[

    check('name','name must 6 letters').isLength({min: 6}),
    check('imageUrl','imageUrl must not empty').not().isEmpty(),

],async (req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { name, imageUrl } = req.body;

})

// @route GET api/hobbies
// @desc get all hobbies
// @access Public
router.get('/',(req,res) => {

});

// @route PUT api/hobbies/:id
// @desc edit hobby
// @access Private
router.put('/:id',[

    check('name','name must 6 letters').isLength({min: 6}),
    check('imageUrl','imageUrl must not empty').not().isEmpty(),

],async (req,res)=> {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { name, imageUrl } = req.body;

});

// @route DELETE api/hobbies/:id
// @desc delete hobby
// @access Private
router.delete('/:id',(req,res)=> {

});

module.exports = router;