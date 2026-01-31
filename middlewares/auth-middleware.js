//Verify json web token to protect routes or we can say token is valid or not and if token is valid then get user data and pass it to req.user
const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    if(!token){
        //if you attempt to use an expired token, you'll receive a "401 Unauthorized HTTP response"
        return res.status(401).json({message: "Unauthorized HTTP, token not provided"});
    }

    //Assuming token is in the format "Bearer <jwtToken>, Removing 'Bearer ' from the token string
    const jwtToken = token.replace("Bearer ", "");
    console.log("Token from auth middleware", jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY); //Verify token using secret key

        const userData = await User.findOne({ email: isVerified.email }).select({password: 0}); //Fetch user data from DB without password
        console.log(userData);
        
        req.user = userData; //Attach decoded user data to request object
        req.token = token;
        req.userID = userData._id;

        next(); //Proceed to the next middleware or route handler

    } catch (error) {
        console.error('Auth middleware error:', error);
        return res.status(401).json({message: "Unauthorized HTTP, invalid token"});
    }
}

module.exports = authMiddleware;