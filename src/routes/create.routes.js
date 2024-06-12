const router = require("express").Router()

const {addPlant} = require("../controllers/controller")

router.post("/add", addPlant);


module.exports = router;