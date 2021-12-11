const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    new: newFlight,
    create,
    index,
    show,
}

function newFlight (req,res) {
    res.render('flights/new');
}

function create (req,res) {
    // if departs input is empty
    if (req.body.departs === "") {
        // delete empty string so we can add default value
        delete(req.body.departs);
    }
    // Create an in-memory Flight object (not saved in database yet)
    const flight = new Flight(req.body);
    // save object in our database
    flight.save(function (err) {
        // one way to handle errors
        if (err) {
            console.log(err);
            return res.redirect('/flights/new');
        }
        res.redirect('/flights');
    })
}

function index (req,res) {
    // Access all flights objects
    Flight.find(({}), function(err,flights) {
        if (err) {
            console.log(err);
            return res.redirect('/');
        }
        // Red text if flight has already departed
        if ((flights.departs - new Date()) > 0 ) {
            
        }
        // render page
        res.render('flights/index',{ flights });
    })
}

function show (req,res) {
    // Find object by ID
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({flight: flight._id}, function (err, tickets) {
            // show object
            res.render('flights/show', { title: 'Flight Detail', flight, tickets })
        })
    })
}
