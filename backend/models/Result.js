const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ResultSchema = new Schema({


    registrationId : {
        type : String,
        // required: true
    },
    studentName : {
        type : String,
        // required: true
    },
    courseId : {
        type : String,
        // required: true

    },
    subjectCode : {
        type : String,
        // required: true
    },
    subjectName : {
        type : String,
        // required: true
    },
    results : {
        type : String,
        // required: true
    },
   
});

const Result = mongoose.model("Result", ResultSchema);

module.exports = Result;