const express = require("express");
const router = express.Router();
const db = require("../../db/connect.js");

// handle get request and get a school Of Interest by user id
router.get("/:id", (req, res) => {
    db("schoolsOfInterest")
        .where({ userID: req.params.id })
        .select()
        .then(data => {
            res.send(data);
        });
});

// handle patch request and update a school Of Interest
router.patch("/:userID/:schoolID", (req, res) => {
    db("schoolsOfInterest")
        .where({ userID: req.params.id, name: req.params.schoolID  })
        .update(req.body)
        .returning("*")
        .then(data => {
            res.send(data);
        });
});

router.delete("/:userID/:schoolID", (req, res) => {
    db("schoolsOfInterest")
        .where({ userID: req.params.userID, name: req.params.schoolID })
        .del()
        .then(() => {
            res.json({ success: true });
        });
});

module.exports = router;