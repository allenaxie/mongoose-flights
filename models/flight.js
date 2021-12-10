const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['ICN','SFO','KUL','LAX','HKG'],
    },
    arrival: Date,    
},{
    timestamps: true
});

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: {
        type: Date,
        default: new Date(+new Date() + 365*24*60*60*1000),
    },
    destinations: [destinationSchema],
}, {
    timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);