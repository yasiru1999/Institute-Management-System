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
    }
});

module.exports = mongoose.model('Modules', ModuleSchema);