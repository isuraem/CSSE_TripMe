const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ForeignTravellerSchema = new Schema({
    Name : {
        type : String,
        required : true
    },
    // Address : {
    //     type : String,
    //     required : true
    // },
    Phone : {
        type : String,
        required : true 
    },
    Email : {
        type : String,
        required : true 
    },
    PassportNo : {
        type : String,
        required : true 
    },
    Password: {
        type: String,
        required: true
    },
    Amount : {
        type : Number,
        default:''
    }
})

const ForeignTraveller = mongoose.model("ForeignTraveller", ForeignTravellerSchema);
module.exports = ForeignTraveller;

