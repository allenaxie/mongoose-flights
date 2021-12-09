var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// All paths in this router have "/flights" prefixed to them
// GET "/flights/new" - New Route
router.get('/new',flightsCtrl.new);

// GET "/flights"
router.get("/", flightsCtrl.index);

module.exports = router;
