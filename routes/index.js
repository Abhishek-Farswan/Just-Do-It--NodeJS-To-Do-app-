//Route for Home

//Necessary Initializations
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({ extended: true }));

//Loaded HomeController 
const homeController = require('../controllers/home_controller');

console.log('Router for home is loaded');

//Directing to HomeController method
router.get('/',homeController.home);

module.exports = router;