const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LibrarySchema = new Schema({

    RelatedCourse : {
        type : String,
        // required: true
    },

    ResourceCategory : {
        type : String,
        // required: true
    },

    Topic : {
        type : String,
        // required: true
    },

    Link : {
        type : String,
        // required: true
    },

    UploadFile : {
        type : String,
        // required: true
    },

    Author : {
        type : String,
        // required: true
    },

    Date : {
        type : String,
        // required: true
    },
}, {
    timestamps: true,
});

const Library = mongoose.model("Library", LibrarySchema);

module.exports = Library;