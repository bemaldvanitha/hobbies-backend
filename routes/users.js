const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();

// @route POST api/signin
// @desc login user
// @access Public
router.post('/signin',(req,res) => {

});

// @route POST api/signup
// @desc register user
// @access Public
router.post('/signup',(req,res) => {

});

// @route GET api/users
// @desc get all users
// @access Public
router.post('/users',(req,res) => {

});

// @route PUT api/users/:id
// @desc edit user
// @access Private
router.post('/users/:id',(req,res) => {

});

module.exports = router;