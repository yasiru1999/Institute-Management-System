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
    examType : {
        type : String,
        // required: true
    },
    date : {
        type : Date,
        // required: true
    },
    time : {
        type : String,
        // required: true
    },

    hallNumber : {
        type : String,
        // required: true
    },

}, {
    timestamps: true,
});

const Timetable = mongoose.model("Timetable", TimetableSchema);

module.exports = Timetable;
