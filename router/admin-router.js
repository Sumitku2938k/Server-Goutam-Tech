const express = require("express");
const router = express.Router();
const { getAllUsers, getAllContacts } = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");

// Apply auth middleware to all routes in this router
router.use(authMiddleware);

router.route("/users").get(getAllUsers);
router.route("/contacts").get(getAllContacts);

module.exports = router;