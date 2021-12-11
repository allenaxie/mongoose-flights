var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');


// GET '/flights/:id/tickets/new' - new ticket route
router.get('/flights/:id/tickets/new', ticketsCtrl.new); 

// POST '/flights/:id/tickets - create ticket route
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;