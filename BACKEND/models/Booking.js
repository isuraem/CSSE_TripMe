const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    RouteNumber: {
        type: String,
        required: true
    },
    TripFrom: {
        type: String,
        required: true
    },
    TripTo: {
        type: String,
        required: true
    },
    DateFrom: {
        type: String,
        required: true
    },
    DateTo: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    }
    
})

const Booking = mongoose.model("Booking",BookingSchema);
module.exports = Booking;