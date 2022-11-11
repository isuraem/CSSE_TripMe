const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    CardNo : {
        type : Number,
        required : true,

    },
    CustomerName : {
        type : String,
        required : true
        
    },
    cvv : {
        type : Number,
        required : true
        
    },
    ExDate : {
        type : String,
        required : true
        
    }
})

const Payment = mongoose.model("Payment", PaymentSchema);
module.exports = Payment;