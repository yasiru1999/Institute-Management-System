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


module.exports = router;