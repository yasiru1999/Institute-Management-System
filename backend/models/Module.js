const mongoose = require('mongoose');

const ModuleSchema = new mongoose.Schema({
    moduleNo: {
        type: String,
        required: true,
    },
    moduleName: {
        type: String,
        required: true,
        trim: true
    },
    subject1: {
        type: String,
        required: true,
        trim: true
    },
    subject2: {
        type: String,
        required: true,
        trim: true
    },
    subject3: {
        type: String,
        required: true,
        trim: true
    },subject4: {
        type: String,
        required: true,
        trim: true
    }

});

module.exports = mongoose.model('Module', ModuleSchema);