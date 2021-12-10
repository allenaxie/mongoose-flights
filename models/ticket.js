const mongoose = require('mongoose');
// Optional shortcut to the mongoose Schema class
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String,
        // Regular expression pattern
        match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number,
        min: 0,
    },
    flight: {
        type: Schema.Types.ObjectId, ref: 'Ticket'
    }
})

// Compile schema into a model and export it
module.exports = mongoose.model('Ticket', ticketSchema);