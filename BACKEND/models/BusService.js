const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusServiceSchema = new Schema({
    BusNumber: {
        type: String,
        required: true
    },
    BusType: {
        type: String,
        required: true
    },
    RouteName: {
        type: String,
        required: true
    },
    RouteNumber: {
        type: String,
        required: true
    }

})
const BusService = mongoose.model("BusService",BusServiceSchema);
module.exports = BusService;
