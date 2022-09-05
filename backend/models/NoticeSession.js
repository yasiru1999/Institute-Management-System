const mongoose = require('mongoose');

const NoticeSessionSchema = new mongoose.Schema({
    moduleNo: {
        type: String,
        required: true,
        default:"IT2000"
    },
    category: {
        type: String,
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    otherDetails: {
        type: String,
    }
    
});

module.exports = mongoose.model('NoticeSession', NoticeSessionSchema);