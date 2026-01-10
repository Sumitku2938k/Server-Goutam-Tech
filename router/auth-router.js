const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controller');
const {signupSchema, loginSchema} = require('../validators/auth-validator');
const validate = require("../middlewares/validate-middleware");

router.route('/').get(authControllers.home);

router.route('/register').post(validate(signupSchema), authControllers.register); //validate ko signupSchema jab hum denge to wo jesse ki ek middleware hai isliye pehle check karega ki user ne jo data diye hai wo hamare diye gaye schema zod mein jo likha hai usse match kar raha hai ya nahi. Ye sab check ke bad hi wo contoller ke pass access bhejaga jisse model jo define hai uske through db mein user ka data save hoga collection mein

router.route('/login').post(validate(loginSchema), authControllers.login);

module.exports = router;
