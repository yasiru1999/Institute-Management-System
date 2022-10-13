const router = require("express").Router();
let Result = require("../models/result");

router.route("/add").post((req, res) => {
    const registrationId = req.body.registrationId;
    const studentName = req.body.studentName;
    const courseId = req.body.courseId;
    const subjectCode = req.body.subjectCode;
    const subjectName = req.body.subjectName;
    const result = req.body.result;

    const newResult = new Result({
        registrationId,
        studentName,
        courseId,
        subjectCode,
        subjectName,
        result,

    })

    newResult.save().then(() => {
        res.json("Result Added")
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/").get((req, res) => {
    Result.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
    })
})


router.route("/update/:id").put(async (req, res) => {
    let registrationID = req.params.id;
    const { registrationId, studentName, courseId, subjectCode, subjectName, result } = req.body;

    const updateResult = {
        registrationId,
        studentName,
        courseId,
        subjectCode,
        subjectName,
        result,
    }

    const update = await Result.findByIdAndUpdate(registrationID, updateResult).then(() => {
        res.status(200).send({ status: "Result Updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    })
})

router.route("/delete/:id").delete(async (req, res) => {
    let registrationID = req.params.id;
    await Result.findByIdAndDelete(registrationID).then(() => {
        res.status(200).send({ status: "Result Deleted" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete Result", error: err.message });
    })
})

router.route("/get/:id").get(async (req, res) => {
    let registrationID = req.params.id;
    const user = await Result.findById(registrationID).then((result) => {
        res.status(200).send({ status: "Result fetched", result })
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with get Result", error: err.message });
    })
})

module.exports = router;





