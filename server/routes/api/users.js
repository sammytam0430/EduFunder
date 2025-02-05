const express = require("express");
const router = express.Router();
const db = require("../../db/connect.js");

const bcrypt = require("bcrypt");
const saltRounds = 10;

// handle post request and add a new user
router.post("/", (req, res) => {
  let salt = bcrypt.genSaltSync(saltRounds);
  req.body.password = bcrypt.hashSync(req.body.password, salt);
  db.insert(req.body)
    .returning("*")
    .into("users")
    .then(data => {
      res.json({ status: 201, success: true, message: "User created, now you may login", userID: data[0].userID });
    })
    .catch(err => {
      if (err.code === "23505") {
        res.json({
          status: 403,
          success: false,
          message: "This email already exists"
        });
      }
    });
});

// handle patch request and update a user
router.patch("/:id", (req, res) => {
  db("users")
    .where({ userId: req.params.id })
    .update(req.body)
    .returning("*")
    .then(data => {
      res.send(data);
    });
});

// handle delete request and remove a user
router.delete("/:id", (req, res) => {
  db("users")
    .where({ userId: req.params.id })
    .del()
    .then(() => {
      res.json({ success: true });
    });
});

module.exports = router;
