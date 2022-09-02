const express = require("express");
const NoticeSession = require('../models/NoticeSession');
const router = express.Router();
//define prefix
/*const router = express.Router({
    prefix:'/noticeSessions'
});*/

//Create Student Group
router.post("/create", (req, res, next) => {
    try{
        const NoticeSessionModel = new NoticeSession({
            moduleNo: req.body.moduleNo,
            category: req.body.category,
            topic: req.body.topic,
            description: req.body.description,
            otherDetails: req.body.otherDetails
        });
        NoticeSessionModel.save().then(createdNoticeSession => {
            res.status(201).json({
                message: "Successfully created",
                NoteSessionId: createdNoticeSession._id
            });
        });
    }catch(err){
        return res.status(500).json({ msg: err.message })
    }
});


module.exports = router;

