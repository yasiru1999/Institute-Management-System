// const router = require("express").Router();
// let Result = require("../models/Result");

// router.route("/add").post((req, res) => {
//     const registrationNumber = req.body.registrationNumber;
//     const studentName = req.body.studentName;
//     const courseId = req.body.courseId;
//     const subjectCode = req.body.subjectCode;
//     const subjectName = req.body.subjectName;
//     const result = req.body.result;

//     const newResult = new Result({
//         registrationNumber,
//         studentName,
//         courseId,
//         subjectCode,
//         subjectName,
//         result,
//     })

//     newResult.save().then(() => {
//         res.json("Result Added")
//     }).catch((err) => {
//         console.log(err);
//     })
// })

// router.route("/").get((req, res) => {
//     Result.find().then((result) => {
//         res.json(result)
//     }).catch((err) => {
//         console.log(err);
//     })
// })


// router.route("/update/:id").put(async (req, res) => {
//     let registrationNumber = req.params.id;
//     const {registrationNumber, studentName, courseId, subjectCode, subjectName, result,} = req.body;


//     const updateResult = {
//         registrationNumber,
//         studentName,
//         courseId,
//         subjectCode,
//         subjectName,
//         result,
//     }

//     const update = await Result.findByIdAndUpdate(registrationNumber, updateResult)
//         .then(() => {
//             res.status(200).send({status: "Result updated"})
//         }).catch((err) => {
//             console.log(err);
//             res.status(500).send({status: "Error with updating data" , error: err.message});
//         })
// })


// router.route("/delete/:id").delete(async (req, res) => {
//     let registrationNumber = req.params.id;
//     await Result.findByIdAndDelete(registrationNumber)
//         .then(() => {
//             res.status(200).send({status: "Result deleted"});
//         }).catch((err) => {
//             console.log(err)
//             res.status(500).send({status: "error with delete user", error: err.message});
//         })
// })

// router.route("/get/:id").get(async (req, res) => {
//     let registrationNumber = req.params.id;
//     const result = await Result.findById(registrationNumber)
//         .then((result) => {
//             //res.status(200).send({status: "Result fetched", result: result})
//             res.json(result)

//         }).catch((err) => {
//             console.log(err)
//             res.status(500).send({status: "error with fetch result", error: err.message});
//         })
// })

// module.exports = router;
