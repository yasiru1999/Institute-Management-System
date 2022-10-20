const LecMaterial = require('../models/LecMaterial');
const express = require("express");
const path = require("path");
const multer = require("multer");
const res = require("express/lib/response");
const router = express.Router();

router.post('/addLecMaterial', (req, res) => {
    const lecMaterial = new LecMaterial(req.body);
    lecMaterial.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'lecFiles/')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.pdf' || ext !== '.png' || ext !== '.jpeg' || ext !== '.docx' || ext !== '.pptx') {
            return cb(res.status(400).end('only document file formats are allowed'), false);
        }
        cb(null, true)
    }
})

const upload = multer({ storage: storage }).single("file");

router.post('/addLecFile',(req,res)=>{
    upload(req, res, err => {
        if (err) {
            return res.json({success: false, err})
        }
        return res.json({success: true, fileName: res.req.file.filename})
    })
})


//get lecture material module wise
router.get("/getLectures/:module", async (req, res) => {
    try {
      let module = req.params.module;
      const allLectures = await LecMaterial.find({moduleName: module});
      res.status(200).json(allLectures);
    } catch (err) {
      res.json(err);
    }
})

//Delete lecture material
router.delete("/delete/:id", async (req, res) => {
    try {
        await LecMaterial.findByIdAndDelete(req.params.id)
        res.json({ msg: "Successfully Deleted" })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
  })


module.exports = router;