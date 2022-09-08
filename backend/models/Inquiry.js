const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InquirySchema = new Schema({

    FirstName : {
        type : String,
        // required: true
    },

    LastName : {
        type : String,
        // required: true
    },

    PhoneNumber : {
        type : String,
        // required: true
    },

    Email : {
        type : String,
        // required: true
    },

    InquiryCategory : {
        type : String,
        // required: true
    },

    StudentID : {
        type : String,
        // required: true
    },

    Inquiry : {
        type : String,
    },

    isRespond : {
        type : Boolean,
        default : false
    }

}, {
    timestamps: true,
});

const Inquiry = mongoose.model("Inquiry", InquirySchema);

module.exports = Inquiry;