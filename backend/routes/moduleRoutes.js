const express = require("express");
const Module = require('../models/Module');
const router = express.Router();




//get selected module by id
router.get('/getModule/:id', async (req, res) => {
    let id = req.params.id;
    Module.findById(id, function (err, detail) {
      res.json(detail);
    });
});




module.exports = router;