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
router.get("/filterAttendance/:module/:date", async (req, res) => {
  try {
    let module = req.params.module;
    let date = req.params.date;
    const allNotices = await Attendance.find({ $and: [ {curDate: date}, {moduleName: module}] });
    res.status(200).json(allNotices);
  } catch (err) {
    res.json(err);
  }
})



//get Notices
router.get("/filterAttendance/:module", async (req, res) => {
  try {
    let module = req.params.module;
    const allNotices = await Attendance.find({ $and: [ {curDate: '2022-10-17'}, {moduleName: module}] });
    res.status(200).json(allNotices);
  } catch (err) {
    res.json(err);
  }
})








module.exports = router;