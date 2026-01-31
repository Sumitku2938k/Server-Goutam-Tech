const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controller');
const {signupSchema, loginSchema} = require('../validators/auth-validator');
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware"); //authMiddleware check karega ki request ke sath valid token hai ya nahi means user login hai ya nahi  

router.route('/').get(authControllers.home);

router.route('/register').post(validate(signupSchema), authControllers.register); //validate ko signupSchema jab hum denge to wo jesse ki ek middleware hai isliye pehle check karega ki user ne jo data diye hai wo hamare diye gaye schema zod mein jo likha hai usse match kar raha hai ya nahi. Ye sab check ke bad hi wo contoller ke pass access bhejaga jisse model jo define hai uske through db mein user ka data save hoga collection mein

router.route('/login').post(validate(loginSchema), authControllers.login);

router.route('/user').get(authMiddleware, authControllers.user); //ye authMiddleware isliye lagaya hai taki ye route protected rahe aur sirf authenticated users hi is route ko access kar sake. Jab bhi koi request aayegi is route par, pehle authMiddleware chalega jo token ko verify karega. Agar token valid hoga to hi request aage controller tak jayegi aur user data fetch hoga. Agar token invalid hoga to middleware error response bhejega aur controller tak request nahi pahuch paayegi.

module.exports = router;
