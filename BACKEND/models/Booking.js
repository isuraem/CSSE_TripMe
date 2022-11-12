const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    CustomerName: {
        type: String,
        required: true
    },
    Mobile: {
        type: String,
        // required: true
    },
    Email: {
        type: String,
    },
    PickUp: {
        type: String,
        // required: true
    },
    Destination: {
        type: String,
        // required: true
    },
    Date: {
        type: String,
        // required: true
    },
    BusService: {
        type: String,
        // required: true
    },
    PassengerID: {
        type: String,
        // required: true
    },
    TicketNo: {
        type: String,
        // required: true
    },
    TripPrice: {
        type: String,
        // required: true
    },
    Status: {
        type: String,
        // required: true
    }   
})

const Booking = mongoose.model("Booking",BookingSchema);
module.exports = Booking;