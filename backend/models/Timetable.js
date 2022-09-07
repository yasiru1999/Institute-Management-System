const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TimetableSchema = new Schema({

    courseName : {
        type : String,
        required: true
    
    },
    subjectID : {
        type : String,
        required: true
    },
      examType : {
        type : String,
        required: true
    },
    date : {
        type : Number,
        required: true
    },
    email : {
        type : String,
        required: true
    },

    time : {
        type : Date,
        required: true
    },

    hallNumber : {
        type : String,
        required: true
    },

   
})

const Timetable = mongoose.model("Timetable", TimetableSchema);

module.exports = Timetable;