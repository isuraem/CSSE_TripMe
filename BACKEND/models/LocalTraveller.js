const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LocalTravellerSchema = new Schema({
    Name : {
        type : String,
        required : true
    },
    Address : {
        type : String,
        required : true
    },
    Phone : {
        type : String,
        required : true 
    },
    Email : {
        type : String,
        required : true 
    },
    NIC : {
        type : String,
        required : true 
    },
    Password: {
        type: String,
        required : true
    }
})

const LocalTraveller = mongoose.model("LocalTraveller", LocalTravellerSchema);

module.exports = LocalTraveller;