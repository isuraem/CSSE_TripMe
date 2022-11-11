const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusServiceSchema = new Schema({
    BusNumber: {
        type: String,
        required: true
    },
    BusServiceName: {
        type: String,
        required: true
    },
    BusType: {
        type: String,
        required: true
    },
    RouteNumber: {
        type: String,
        required: true
    },
    DepartureTime: {
        type: String,
        required: true
    },
    JourneyTime: {
        type: String,
        required: true
    },
    RestStops: {
        type: Number,
        required: true
    },
    AirCondition: {
        type: String,
        required: true
    },
    WiFi: {
        type: String,
        required: true
    },
    ChargingPlugs: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        default:''
    }

})
const BusService = mongoose.model("BusService",BusServiceSchema);
module.exports = BusService;
