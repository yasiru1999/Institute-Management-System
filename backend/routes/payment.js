const Payment = require('../models/Payment');
const express = require("express");
const path = require("path");
const multer = require("multer");
const res = require("express/lib/response");
const router = express.Router();

router.post('/addPayment', (req, res) => {

    const payment = new Payment(req.body);

    payment.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });

});

router.get('/getPayment' , (req,res) => {
    Payment.find().then((payment) => {
        res.json(payment)
    }).catch((err) => {
        console.log(err);
    })

})

router.put('/updatePayment/:id', (req,res)=>{
    const payment = (req.body);
    Payment.findByIdAndUpdate({ _id: req.params.id }, payment).then(result => {
        console.log(result);
        res.status(200).json({ message: "Successfully Updated" })
    })
})

router.delete('/deletePayment/:id', (req,res)=>{
    const payment = (req.body);
    Payment.findByIdAndDelete({ _id: req.params.id }, payment).then(() => {
        res.status(200).json({ message: "Successfully Deleted" })
    })
})

router.put('/approvePayment/:id', (req,res)=>{
    Payment.findByIdAndUpdate({ _id: req.params.id }, {isApproved : true}).then(() => {
        res.status(200).json({ message: "Successfully Updated" })
    })

})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'paymentSlips/')
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

router.post('/addPaymentSlip',(req,res)=>{
    upload(req, res, err => {
        if (err) {
            return res.json({success: false, err})
        }
        return res.json({success: true, fileName: res.req.file.filename})
    })
})

module.exports = router;