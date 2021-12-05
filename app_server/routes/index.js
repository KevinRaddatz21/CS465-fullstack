var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main'); 

/* GET home page. */
router.get('/', ctrlMain.index); 
module.exports = router;

const tripsController = require('../controllers/trips'); 

router
    .route('/trips'
    .get(tripsController.tripsList))

router
    .route('/trips/tripCode')
    .get(tripsController.tripsFindCode); 
module.exports = router; 