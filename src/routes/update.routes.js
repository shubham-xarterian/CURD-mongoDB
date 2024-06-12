const router = require("express").Router();

const {updatePlant} = require("../controllers/controller")

router.put("/updateplant/:id", updatePlant);


module.exports = router;