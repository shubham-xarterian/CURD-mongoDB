const router = require("express").Router()

const {getAllPlants} = require("../controllers/controller")

router.get("/get", getAllPlants);

module.exports = router;