const router = require("express").Router();
let Timetable = require("../models/Timetable");

router.route("/add").post((req, res) => {
    const courseId = req.body.courseId;
    const subjectId = req.body.subjectId;
    const subjectId2 = req.body.subjectId2;
    const subjectId3 = req.body.subjectId3;
    const subjectId4 = req.body.subjectId4;
    const examType = req.body.examType;
    const examType2 = req.body.examType2;
    const examType3 = req.body.examType3;
    const examType4 = req.body.examType4;   
    const date = req.body.date;
    const date2 = req.body.date2;
    const date3 = req.body.date3;
    const date4 = req.body.date4;
    const time = req.body.time;
    const time2 = req.body.time2;
    const time3 = req.body.time3;
    const time4 = req.body.time4;
    const hallNumber = req.body.hallNumber;
    const hallNumber2 = req.body.hallNumber2;
    const hallNumber3 = req.body.hallNumber3;
    const hallNumber4 = req.body.hallNumber4;


    const newTimetable = new Timetable({
        courseId,
        subjectId,
        subjectId2,
        subjectId3,
        subjectId4,
        examType,
        examType2,
        examType3,
        examType4,
        date,
        date2,
        date3,
        date4,
        time,
        time2,
        time3,
        time4,
        hallNumber,
        hallNumber2,
        hallNumber3,
        hallNumber4

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
    const {courseId,
        subjectId,
        subjectId2,
        subjectId3,
        subjectId4,
        examType,
        examType2,
        examType3,
        examType4,
        date,
        date2,
        date3,
        date4,
        time,
        time2,
        time3,
        time4,
        hallNumber,
        hallNumber2,
        hallNumber3,
        hallNumber4} = req.body;


    const updateTimetable = {
        courseId,
        subjectId,
        subjectId2,
        subjectId3,
        subjectId4,
        examType,
        examType2,
        examType3,
        examType4,
        date,
        date2,
        date3,
        date4,
        time,
        time2,
        time3,
        time4,
        hallNumber,
        hallNumber2,
        hallNumber3,
        hallNumber4

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
