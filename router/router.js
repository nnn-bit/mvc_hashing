const express = require("express");
const { renderHome, addUser } = require("../controler/controller");
const router = express.Router();

router.get("/", renderHome);
router.post("/add", addUser);

module.exports = router;