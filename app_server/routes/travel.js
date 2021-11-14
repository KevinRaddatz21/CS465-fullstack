const express = require('express'); 
const router = express.router; 
const controller = require('../controllers/travel'); 

/* GET home page. */ 
router.get('/', controller.travel); //Throwing Error 11/14 
module.exports = router; 