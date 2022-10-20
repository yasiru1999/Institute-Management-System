const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LecMaterialSchema = new Schema({

    title : {
        type : String
    },
    description : {
        type : String
    },
    link : {
        type : String
    },
    lecFile : {
        type : String
    },
    moduleName : {
        type : String
    }
    
}, {
    timestamps: true,
});

const LecMaterial = mongoose.model("LecMaterial", LecMaterialSchema);

module.exports = LecMaterial;