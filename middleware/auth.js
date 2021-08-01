const jwt = require('jsonwebtoken');

module.exports = function (req,res,next) {

    // get token from header
    const token = req.header('x-auth-token');

    // check if no token
    if(!token){
        return res.status(401).json({msg: 'Authorization denied'});
    }

    // verify token
    try {
        const decoded = jwt.verify(token,'bemal');

        req.user = decoded.user;
        next();

    }catch (err){
        res.status(401).json({msg: 'token is not valid'});
    }
}