const express = require("express");
const router = express.Router();
const { getAllUsers, getAllContacts, deleteUserById, getUserById} = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");  // Check if user is authenticated i.e logged in and token is valid
const adminMiddleware = require("../middlewares/admin-middleware"); // Check if user has admin privileges, this middleware should be used after authMiddleware because it relies on req.user data set by authMiddleware

// Apply auth middleware to all routes in this router
// router.use(authMiddleware);

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById); //Get user by id
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, deleteUserById);

router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts);

module.exports = router;