const express = require("express");
const router = express.Router();

const users = require("./users.js");
const login = require("./login.js");
const students = require("./students.js");
const donors = require("./donors.js");
const educations = require("./educations.js");
const schools = require("./schools.js");

// set routes for api
router.use("/users", users);
router.use("/login", login);
router.use("/students", students);
router.use("/donors", donors);
router.use("/educations", educations);
router.use("/schools", schools);

module.exports = router;
