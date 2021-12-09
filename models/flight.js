const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS','DFW','DEN','LAX','SAN'],
    },
    arrival: Date,    
},{
    timestamps: true
})

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destination: [destinationSchema],
}, {
    timestamps: true
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);