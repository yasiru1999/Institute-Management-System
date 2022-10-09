const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    curDate: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
        required: true,
        trim: true
    },
    moduleName: {
        type: String,
        required: true,
    },
    session: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
    }
});

module.exports = mongoose.model('Attendance', AttendanceSchema);