const express = require('express');
const router = express.Router();
const Services = require('../controllers/service-controller.js');

router.route("/services").get(Services);

module.exports = router;