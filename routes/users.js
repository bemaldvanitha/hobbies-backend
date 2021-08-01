const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { selectRow } = require('../utils/database');

const router = express.Router();

// @route POST api/signin
// @desc login user
// @access Public
router.post('/signin',[

    check('email','email must valid').isEmail(),
    check('password','please enter with 6 char').isLength({min: 6}),

],async (req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { email, password } = req.body;

});

// @route POST api/signup
// @desc register user
// @access Public
router.post('/signup',[

    check('firstName','first name must not empty').not().isEmpty(),
    check('lastName','last name must not empty').not().isEmpty(),
    check('email','email must valid').isEmail(),
    check('age','age must number').isNumeric(),
    check('imageUrl','image url must not empty').not().isEmpty(),
    check('password','please enter with 6 char').isLength({min: 6}),

],async (req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { firstName, lastName, email, age, imageUrl, password } = req.body;

    try{

        let isExist = await selectRow("users","email",email);

        if(isExist.length > 0){
            return res.status(400).json({
                errors: [
                    { msg: 'User already exists' }
                ]
            });
        }

        const salt = await bcrypt.getSalt(10);
        const encryptedPassword = await bcrypt.hash(password,salt);


    }catch (err){
        console.error(err.message);
        return res.status(500).send('Server error');
    }

});

// @route GET api/users
// @desc get all users
// @access Public
router.get('/users',async (req,res) => {

});

// @route PUT api/users/:id
// @desc edit user
// @access Private
router.put('/users/:id',[

    check('firstName','first name must not empty').not().isEmpty(),
    check('lastName','last name must not empty').not().isEmpty(),
    check('email','email must valid').isEmail(),
    check('age','age must number').isNumeric(),
    check('imageUrl','image url must not empty').not().isEmpty(),
    check('password','please enter with 6 char').isLength({min: 6}),

],async (req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { firstName, lastName, email, age, imageUrl, password } = req.body;

});

// @route PUT api/users/numbers/:id
// @desc add number
// @access Private
router.put('/users/numbers/:id',[

    check('telNumber','tel-number must number').isNumeric(),
    check('name','please enter name with 5 char').isLength({min: 5}),

],async (req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { telNumber, name } = req.body;

});

module.exports = router;