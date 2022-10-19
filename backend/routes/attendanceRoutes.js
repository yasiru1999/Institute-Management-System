const express = require("express");
const Attendance = require('../models/Attendance');
const router = express.Router();

//Submit Student Attendance 
router.post("/create", (req, res, next) => {
    try{
        const AttendanceModel = new Attendance({
            curDate: req.body.curDate,
            studentName: req.body.studentName,
            moduleName: req.body.moduleName,
            session: req.body.session,
            feedback: req.body.feedback
        });
        AttendanceModel.save().then(createdAttendance => {
            res.status(201).json({
                message: "Successfully Submitted",
                AttendanceId: createdAttendance._id
            });
        });
    }catch(err){
        return res.status(500).json({ msg: err.message })
    }
});

//get stuedent attendace module wise
router.get("/getAttendance/:module", async (req, res) => {
    try {
      let module = req.params.module;
      const allNotices = await Attendance.find({moduleName: module});
      res.status(200).json(allNotices);
    } catch (err) {
      res.json(err);
    }
  })

 //get Notices
/*router.get("/getNoticesdate/:module", async (req, res) => {
    try {
      let module = req.params.module;
      const allNotices = await Attendance.find({ $and: [ {moduleName: module}, {curDate:{$gte:ISODate("2022-10-08"),$lt:ISODate("2022-10-10")}} ]});
      res.status(200).json(allNotices);
    } catch (err) {
      res.json(err);
    }
  })

  //get Notices
router.get("/getNoticesdateS/:module", async (req, res) => {
    try {
      let module = req.params.module;
      const allNotices = await Attendance.find({curDate:{
        $gte:ISODate("2022-09-08T00:00:00.000Z"),$lt:ISODate("2022-10-10T00:00:00.000Z")}});
      res.status(200).json(allNotices);
    } catch (err) {
      res.json(err);
    }
  })*/



module.exports = router;