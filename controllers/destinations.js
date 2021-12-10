let Flight = require('../models/flight');

module.exports = {
    create,
};

function create (req,res) {
    // First find the flight we are adding a destination to
    Flight.findById(req.params.id, function (err, flight) { // ASYNCHRONOUS
        // Add destination to flight.destinations array
        flight.destinations.push(req.body);
        // save the parent document
        flight.save(function (err) {
            // handle errors first
            if (err) console.log(err);
            // redirect to show page
            res.redirect(`/flights/${flight._id}`);
        });
    });
}