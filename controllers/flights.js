const Flight = require('../models/flight');

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
    Flight.find({}, function(err,flights) {
        if (err) {
            console.log(err);
            return res.redirect('/');
        }
        // render page
        res.render('flights/index',{ flights });
    })
}

function show (req,res) {
    // Find object by ID
    Flight.findById(req.params.id, function (err, flight) {
        // show object
        res.render('flights/show', { title: 'Flight Detail', flight })
    })
}
