const express = require("express");
const router = express.Router();
const db = require("../../db/connect.js");

// handle get request and get a educations by user id
router.get("/:id", (req, res) => {
    db("educations")
        .where({ userID: req.params.id })
        .select()
        .then(data => {
            res.send(data);
        });
});

// handle patch request and update a educations
router.patch("/:userID/:educationID", (req, res) => {
    db("educations")
        .where({ userID: req.params.id, name: req.params.educationID  })
        .update(req.body)
        .returning("*")
        .then(data => {
            res.send(data);
        });
});

router.delete("/:userID/:educationID", (req, res) => {
    db("educations")
        .where({ userID: req.params.userID, name: req.params.educationID })
        .del()
        .then(() => {
            res.json({ success: true });
        });
});

module.exports = router;