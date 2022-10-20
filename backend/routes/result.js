const router = require("express").Router();
let Result = require("../models/Result");

router.route("/add").post((req, res) => {
    const registrationId = req.body.registrationId;
    const studentName = req.body.studentName;
    const courseId = req.body.courseId;
    const subjectCode = req.body.subjectCode;
    const subjectName = req.body.subjectName;
    const results = req.body.results;
    const subjectCode2 = req.body.subjectCode2;
    const subjectName2 = req.body.subjectName2;
    const results2 = req.body.results2;
    const subjectCode3 = req.body.subjectCode3;
    const subjectName3 = req.body.subjectName3;
    const results3 = req.body.results3;
    const subjectCode4 = req.body.subjectCode4;
    const subjectName4 = req.body.subjectName4;
    const results4 = req.body.results4;

    const newResult = new Result({
        registrationId,
        studentName,
        courseId,
        subjectCode,
        subjectName,
        results,
        subjectCode2,
        subjectName2,
        results2,
        subjectCode3,
        subjectName3,
        results3,
        subjectCode4,
        subjectName4,
        results4

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
    const { registrationId, 
        studentName, 
        courseId, 
        subjectCode, 
        subjectName, 
        results,
        subjectCode2,
        subjectName2,
        results2,
        subjectCode3,
        subjectName3,
        results3,
        subjectCode4,
        subjectName4,
        results4} = req.body;
        console.log(req.body);

    const updateResult = {
        registrationId,
        studentName,
        courseId,
        subjectCode,
        subjectName,
        results,
        subjectCode2,
        subjectName2,
        results2,
        subjectCode3,
        subjectName3,
        results3,
        subjectCode4,
        subjectName4,
        results4


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
        console.log(err);
        res.status(500).send({ status: "Error with delete result", error: err.message });
    })
})

router.route("/get/:id").get(async (req, res) => {
    let registrationID = req.params.id;
    const result = await Result.findById(registrationID).then((result) => {
        // res.status(200).send({ status: "Result fetched", result })
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with get Result", error: err.message });
    })
})

module.exports = router;





