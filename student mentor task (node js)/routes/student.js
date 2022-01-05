var express = require("express");
var router = express.Router();
var studentModule = require('../modules/studentmodule');

router.get("/getstudent", studentModule.getStudent);
router.get("/getmentor", studentModule.getMentor);
router.post("/createstudent", studentModule.createStudent);
router.post("/creatementor", studentModule.createMentor);
router.put("/changementor", studentModule.changeMentor);
router.get("/show", studentModule.show);
module.exports = router;