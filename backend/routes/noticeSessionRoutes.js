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
router.get("/getNotices/:module", async (req, res) => {
  try {
    let module = req.params.module;
    const allNotices = await NoticeSession.find({ $and: [ {category: 'Notice'}, {moduleNo: module}] });
    res.status(200).json(allNotices);
  } catch (err) {
    res.json(err);
  }
})

//get Sessions
router.get("/getSessions/:module", async (req, res) => {
  try {
    let module = req.params.module;
    const allSessions = await NoticeSession.find({ $and: [ {category: 'Session'}, {moduleNo: module}] });
    res.status(200).json(allSessions);
  } catch (err) {
    res.json(err);
  }
})

//view selected detail by id
router.get('/getDetails/:id', async (req, res) => {
  let id = req.params.id;
  NoticeSession.findById(id, function (err, detail) {
    res.json(detail);
  });
});


//Update Notices or Sessions
router.put("/update/:id", (req, res, next) => {
  const NoticeSessionModel = ({
    moduleNo: req.body.moduleNo,
    category: req.body.category,
    topic: req.body.topic,
    description: req.body.description,
    otherDetails: req.body.otherDetails
  });
  NoticeSession.findOneAndUpdate({ _id: req.params.id }, NoticeSessionModel).then(result => {
    console.log(result);
    res.status(200).json({ message: "Successfully Updated" })
  })
});



router.delete("/delete/:id", async (req, res) => {
  try {
      await NoticeSession.findByIdAndDelete(req.params.id)
      res.json({ msg: "Successfully Deleted" })
  } catch (err) {
      return res.status(500).json({ msg: err.message })
  }
})



  



module.exports = router;

