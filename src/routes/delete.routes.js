const router = require("express").Router()

const {deletePlant} = require("../controllers/controller")

router.delete("/deleteplant/:id", deletePlant);

module.exports = router;