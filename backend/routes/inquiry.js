const Inquiry = require('../models/Inquiry');
const express = require("express");
const router = express.Router();

router.post('/addInquiry', (req, res) => {
    const inquiry = new Inquiry(req.body);
    inquiry.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });

});

router.get('/getInquiry' , (req,res) => {
    Inquiry.find().then((inquiry) => {
        res.json(inquiry)
    }).catch((err) => {
        console.log(err);
    })

})

router.put('/updateInquiry/:id', (req,res)=>{
    const inquiry = (req.body);
    Inquiry.findByIdAndUpdate({ _id: req.params.id }, inquiry).then(result => {
        console.log(result);
        res.status(200).json({ message: "Successfully Updated" })
    })
})

router.delete('/deleteInquiry/:id', (req,res)=>{
    const inquiry = (req.body);
    Inquiry.findByIdAndDelete({ _id: req.params.id }, inquiry).then(() => {
        res.status(200).json({ message: "Successfully Deleted" })
    })
})

router.put('/approveInquiry/:id', (req,res)=>{
    Inquiry.findByIdAndUpdate({ _id: req.params.id }, {isRespond : true}).then(() => {
        res.status(200).json({ message: "Successfully Updated" })
    })

})

module.exports = router;