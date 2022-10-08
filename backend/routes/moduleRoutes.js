const express = require("express");
const Modules = require('../models/Module');
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


//Get module details by Module Name
router.get("/getOneModule/:module", async (req, res) => {
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


module.exports = router;