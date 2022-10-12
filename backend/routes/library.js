const Library = require('../models/Library');
const express = require("express");
const path = require("path");
const multer = require("multer");
const res = require("express/lib/response");
const router = express.Router();

router.post('/addLibraryDoc', (req, res) => {

    const library = new Library(req.body);

    library.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });

});

router.get('/getLibraryDoc' , (req,res) => {
    Library.find().then((library) => {
        res.json(library)
    }).catch((err) => {
        console.log(err);
    })

})

router.put('/updateLibraryDoc/:id', (req,res)=>{
    const library = (req.body);
    Library.findByIdAndUpdate({ _id: req.params.id }, library).then(result => {
        console.log(result);
        res.status(200).json({ message: "Successfully Updated" })
    })
})

router.delete('/deleteLibraryDoc/:id', (req,res)=>{
    const library = (req.body);
    Library.findByIdAndDelete({ _id: req.params.id }, library).then(() => {
        res.status(200).json({ message: "Successfully Deleted" })
    })
})

router.put('/approveLibraryDoc/:id', (req,res)=>{
    Library.findByIdAndUpdate({ _id: req.params.id }, {isApproved : true}).then(() => {
        res.status(200).json({ message: "Successfully Updated" })
    })

})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'libraryDocuments/')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.png' || ext !== '.jpeg' || ext !== '.docx' || ext !== '.pptx') {
            return cb(res.status(400).end('only document file formats are allowed'), false);
        }
        cb(null, true)
    }
})

const upload = multer({ storage: storage }).single("file")

router.post('/addLibraryDocument',(req,res)=>{
    upload(req, res, err => {
        if (err) {
            return res.json({success: false, err})
        }
        return res.json({success: true, fileName: res.req.file.filename})
    })
})

module.exports = router;