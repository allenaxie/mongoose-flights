let Flight = require('../models/flight');
let Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
}

function newTicket (req,res) {
    // Find the flight we are adding a ticket to
    Flight.findById(req.params.id, function (err, flight) {
        // Render new ticket page in views
        res.render(`tickets/new`, {flight});
    })
}

function create (req,res) {
    // Find the flight we are adding the ticket to
    Flight.findById(req.params.id, function (err, flight) {
        console.log(req.params.id)
        // add flight to ticket.flight
        // Save the parent document
        flight.save(function (err) {
            // handle errors
            if (err) console.log(err);
            // redirect to show page
            res.redirect(`/flights/${flight._id}`);
        })
    })
}
