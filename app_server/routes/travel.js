const express = require('express'); 
const router = express.router(); 
const controller = require('../controllers/travel'); 

/* GET home page. */ 
router.get('/', controller.travel); 

module.exports = router; 