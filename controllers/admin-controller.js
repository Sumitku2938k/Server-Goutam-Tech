const User = require("../models/user-model");
const Contact = require("../models/contact-model");

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
//Single User logic
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({ _id: id }).select({password: 0});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

//User update logic
const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const { username, email, phone } = req.body;
        const updatedUser = await User.findByIdAndUpdate(id, { username, email, phone }, { new: true });
        if(!updatedUser){
            return res.status(404).json({message: "User not found"});
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
}

//User delete logic
const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        return res.status(200).json({message: "User deleted successfully"});
    } catch (error) {
        next(error);
    }
}

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find(); //Fetch all contacts data from DB 
        console.log("Contacts data : ", contacts);
        if(!contacts || contacts.length === 0){
            return res.status(404).json({message: "No contacts found"});
        }
        return res.status(200).json(contacts);
    } catch (error) {
        console.error("Error in fetching all contacts : ", error);
        next(error);
    }
}

//Contact delete logic
const deleteContactById = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id });
        return res.status(200).json({message: "Contact deleted successfully"});
    } catch (error) {
        next(error);
    }
}
module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById };