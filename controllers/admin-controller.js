const User = require("../models/user-model");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select({password: 0}); //Fetch all users data from DB without password field
        console.log("Users data : ", users);
        if(!users || users.length === 0){
            return res.status(404).json({message: "No users found"});
        }
        return res.status(200).json(users);
    } catch (error) {
        console.error("Error in fetching all users : ", error);
        next(error);
    }
    
};

module.exports = getAllUsers;