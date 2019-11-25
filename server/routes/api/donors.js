const express = require("express");
const router = express.Router();
const db = require("../../db/connect.js");

// handle get request and get a donors by id
router.get("/:id", (req, res) => {
    db("donors")
        .join("users", { "donors.userID": "users.userID" })
        .where({ userID: req.params.id })
        .select()
        .then(data => {
            res.send(data);
        });
});

// handle patch request and update a donors
router.patch("/:id", (req, res) => {
    db("donors")
        .join("users", { "donors.userID": "users.userID" })
        .where({ userID: req.params.id })
        .update(req.body)
        .returning("*")
        .then(data => {
            res.send(data);
        });
});

module.exports = router;