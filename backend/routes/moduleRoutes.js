const express = require("express");
const Modules = require('../models/Module');
const Payment = require("../models/Payment");
const {User} = require("../models/User");
const router = express.Router();

//Get all modules
router.get("/getAll", async (req, res) => {
  try {
    const getmodules = await Modules.find({});
    res.status(200).json(getmodules);
  } catch (err) {
    res.json(err);
  }
})


//Get module details by using Module no
router.get("/getOneCourse/:module", async (req, res) => {
  try {
    let module = req.params.module;
    const OneModule = await Modules.findOne({ moduleNo: module });
    res.status(200).json(OneModule);
  } catch (err) {
    res.json(err);
  }
})


//view selected detail by id
router.get('/getoneModule/:id', async (req, res) => {
  let id = req.params.id;
  Modules.findById(id, function (err, detail) {
    res.json(detail);
  });
});

//Add new courses
router.post('/addCourse', (req, res) => {

  const course = new Modules(req.body);

  course.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true
    });
  });

});
//View All courses from admin
router.get('/getAllModules' , (req,res) => {
  Modules.find().then((modules) => {
    res.json(modules)
  }).catch((err) => {
    console.log(err);
  })
})

//delete courses
router.delete('/deleteModule/:id', (req,res)=>{
  const module = (req.body);
  Modules.findByIdAndDelete({ _id: req.params.id }, module).then(() => {
    res.status(200).json({ message: "Successfully Deleted" })
  })
})

//Update course by Admin
router.put('/updateCourse/:id', (req,res)=>{
  const updateCourse = (req.body);
  Modules.findByIdAndUpdate({ _id: req.params.id }, updateCourse).then(result => {
    console.log(result);
    res.status(200).json({ message: "Successfully Updated" })
  })
})

module.exports = router;