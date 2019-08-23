const express = require("express");
const router = express.Router();

//@route    GET api/contacts
//@desc     Get all users contacts
//@access   Privite
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

//@route    POST api/contacts
//@desc     Add new contact
//@access   Privite
router.post("/", (req, res) => {
  res.send("Add contact");
});

//@route    PUT api/contacts/:
//@desc     Update contact
//@access   Privite
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

//@route    DELETE api/contacts/:
//@desc     Delete contact
//@access   Privite
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
