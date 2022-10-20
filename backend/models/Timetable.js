const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TimetableSchema = new Schema({

    courseId : {
        type : String,
        // required: true

    },
    subjectId : {
        type : String,
        // required: true
    },
    subjectId2 : {
        type : String,
        // required: true
    },
    subjectId3 : {
        type : String,
        // required: true
    },
    subjectId4 : {
        type : String,
        // required: true
    },
    examType : {
        type : String,
        // required: true
    },
    examType2 : {
        type : String,
        // required: true
    },
    examType3 : {
        type : String,
        // required: true
    },
    examType4 : {
        type : String,
        // required: true
    },

    date : {
        type : Date,
        // required: true
    },
    date2 : {
        type : Date,
        // required: true
    },
    date3 : {
        type : Date,
        // required: true
    },
    date4 : {
        type : Date,
        // required: true
    },
    time : {
        type : String,
        // required: true
    },
    time2 : {
        type : String,
        // required: true
    },
    time3 : {
        type : String,
        // required: true
    },
    time4 : {
        type : String,
        // required: true
    },

    hallNumber : {
        type : String,
        // required: true
    },
    hallNumber2 : {
        type : String,
        // required: true
    },
    hallNumber3 : {
        type : String,
        // required: true
    },
    hallNumber4 : {
        type : String,
        // required: true
    },

}, {
    timestamps: true,
});

const Timetable = mongoose.model("Timetable", TimetableSchema);

module.exports = Timetable;
