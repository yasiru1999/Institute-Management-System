const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({

    StudentID : {
        type : String,
        // required: true

    },
    StudentName : {
        type : String,
        // required: true
    },
    PhoneNo : {
        type : String,
        // required: true
    },
    Email : {
        type : String,
        // required: true
    },
    RegisteredCourse : {
        type : String,
        // required: true
    },

    PaymentAmount : {
        type : String,
        // required: true
    },

    PaymentSlip : {
        type : String,
    },

    PaymentDate : {
        type : Date
    },

    isApproved : {
      type : Boolean,
      default : false
    }
    
}, {
    timestamps: true,
});

const Payment = mongoose.model("Payment", PaymentSchema);

module.exports = Payment;