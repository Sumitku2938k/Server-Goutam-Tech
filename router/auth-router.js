const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controller');

// router.route('/').get((req, res) => {
//     res.send('Hello, World!');
// });
// router.get("/", (req, res) => {
//     res.send('Hello, World!');
// });
router.route('/').get(authControllers.home);

router.route('/register').post(authControllers.register);

module.exports = router;
