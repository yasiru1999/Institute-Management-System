const express = require("express");
const NoticeSession = require('../models/NoticeSession');
const router = express.Router();

//Create Student Group
router.post("/create", (req, res, next) => {
    try{
        const NoticeSessionModel = new NoticeSession({
            //moduleNo: req.body.moduleNo,
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


//get Notices
  router.get("/get/notices", async (req, res) => {
    try {
      const allNotices = await NoticeSession.find({ category: 'Notice' });
      res.status(200).json(allNotices);
    } catch (err) {
      res.json(err);
    }
})

//get Sessions
router.get("/get/sessions", async (req, res) => {
    try {
      const allSessions = await NoticeSession.find({ category: 'Session' });
      res.status(200).json(allSessions);
    } catch (err) {
      res.json(err);
    }
})

  



module.exports = router;

