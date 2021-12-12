const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['ICN','SFO','KUL','LAX','HKG'],
    },
    arrival: {
        type: Date,
        default: new Date(
            new Date().setFullYear(
              new Date().getFullYear() +1,
            ))
    },    
},{
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type:String,
        enum: ['Alaska','American','Delta','Emirates','Hawaiin','Singapore','Southwest','United',]
    },
    airport: {
        type:String,
        enum: ['SFO','BKK', 'SHA','LAX','SIN']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
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