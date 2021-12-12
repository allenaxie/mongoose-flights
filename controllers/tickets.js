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
        // Ticket.find({flight: flight._id}, function (err, ticket) {
            // Add flight id to ticket.flight
            req.body.flight = req.params.id;
            // Create an in-memory ticket object (not saved in database yet)
            const ticket = new Ticket(req.body);
            // Save object in our database
            ticket.save(function (err) {
                // handle errors
                if (err) console.log(err);
                // redirect to show page
                res.redirect(`/flights/${flight._id}`);
            })
            // save ticket document
        // })
    })
}
