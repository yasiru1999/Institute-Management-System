const router = require("express").Router();
let Timetable = require("../models/Timetable");

router.route("/add").post((req, res) => {
    const courseId = req.body.courseId;
    const subjectId = req.body.subjectId;
    const examType = req.body.examType;
    const date = req.body.date; 
    const time = req.body.time;
    const hallNumber = req.body.hallNumber;

    const newTimetable = new Timetable({
        courseId,
        subjectId,
        examType,
        date,
        time,
        hallNumber
        
    })

    newTimetable.save().then(() => {
        res.json("Timetable Added")
    }).catch((err) => {
        console.log(err);   
    })
})

    router.route("/").get((req, res) => {
        Timetable.find().then((timetable) => {
            res.json(timetable)
        }).catch((err) => {
            console.log(err);
        })
    })


router.route("/update/:id").put(async (req, res) => {
    let courseID = req.params.id;
    const {courseId, subjectId, examType, date, time, hallNumber} = req.body;

    const updateTimetable = {
        courseId,
        subjectId,
        examType,
        date,
        time,
        hallNumber
        
    }
    
    const update = await Timetable.findByIdAndUpdate(courseID, updateTimetable)
    .then(() => {
        res.status(200).send({status: "Timetable updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data" , error: err.message});
    })
})


router.route("/delete/:id").delete(async (req, res) => {
    let courseID = req.params.id;
    await Timetable.findByIdAndDelete(courseID)
    .then(() => {
        res.status(200).send({status: "Timetable deleted"});
    }).catch((err) => {
        console.log(err)
        res.status(500).send({status: "error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let courseID = req.params.id;
    const timetable = await Timetable.findById(courseID)
    .then((timetable) => {
        //res.status(200).send({status: "Timetable fetched", timetable: timetable})
        res.json(timetable)

    }).catch((err) => {
        console.log(err)
        res.status(500).send({status: "error with fetch timetable", error: err.message});
    })
})

module.exports = router;