const express = require('express');
const { check, validationResult } = require('express-validator');

const { selectRow, insertNewHobby, insertExistHobby, selectAllData, deleteUserHobby } = require('../utils/database');
const auth = require('../middleware/auth');

const router = express.Router();

// @route POST api/hobbies/:id
// @desc add hobby
// @access Private
router.post('/:id',[
    auth,
    [
        check('name','name must 6 letters').isLength({min: 6}),
        check('imageUrl','imageUrl must not empty').not().isEmpty(),

    ]
],async (req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { name, imageUrl } = req.body;
    const userId = req.params.id;

    try{
        const isExist = await selectRow('hobby','name',name);

        if(isExist.length === 0){
            insertNewHobby(name,imageUrl);
            const isExist = await selectRow('hobby','name',name);
            insertExistHobby(userId,isExist[0].id);

        }else{
            insertExistHobby(userId, isExist[0].id);
        }

        return res.status(200).json({
            msg: 'success'
        });

    }catch (err){
        console.error(err.message);
        return res.status(500).send('Server error');
    }
})

// @route GET api/hobbies/:id
// @desc get all hobbies
// @access Private
router.get('/:id',auth,async (req,res) => {
    const userId = req.params.id;

    try {

        const currentHobbies = [];
        const allHobbies = await selectAllData('hobby');
        const allUserHobbies = await selectAllData('user_hobbies');
        const currentUserHobbyIds = allUserHobbies.filter(hobby => hobby.userId.toString() === userId);

        allHobbies.map(hobby => {
           const hobbyId = hobby.id;
           const isCurrentsFav = currentUserHobbyIds.findIndex(hobby => hobby.hobbyId.toString() === hobbyId.toString());
           if(isCurrentsFav !== -1){
               currentHobbies.push(hobby);
           }
        });

        return res.status(200).json({
            hobbies: currentHobbies
        })

    }catch (err){
        console.error(err.message);
        return res.status(500).send('Server error');
    }
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

// @route DELETE api/hobbies/:userid/:hobbyid
// @desc delete hobby
// @access Private
router.delete('/:userid/:hobbyid',auth,(req,res)=> {
    const userId = req.params.userid;
    const hobbyId = req.params.hobbyid;

    try{

        deleteUserHobby(userId,hobbyId);
        return res.status(200).json({
            msg: 'success'
        });

    }catch (err){
        console.error(err.message);
        return res.status(500).send('Server error');
    }
});

module.exports = router;