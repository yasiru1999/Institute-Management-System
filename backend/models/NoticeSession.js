const mongoose = require('mongoose');

const NoticeSessionSchema = new mongoose.Schema({
    moduleNo: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    topic: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    otherDetails: {
        type: String,
        trim: true
    }
    
});

module.exports = mongoose.model('NoticeSession', NoticeSessionSchema);