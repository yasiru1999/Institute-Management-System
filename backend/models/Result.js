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
    subjectCode2 : {
        type : String,
        // required: true
    },
    subjectName2 : {
        type : String,
        // required: true
    },
    results2 : {
        type : String,
        // required: true
    },
    subjectCode3 : {
        type : String,
        // required: true
    },
    subjectName3 : {
        type : String,
        // required: true
    },
    results3 : {
        type : String,
        // required: true
    },
    subjectCode4 : {
        type : String,
        // required: true
    },
    subjectName4 : {
        type : String,
        // required: true
    },
    results4 : {
        type : String,
        // required: true
    },
   
});

const Result = mongoose.model("Result", ResultSchema);

module.exports = Result;