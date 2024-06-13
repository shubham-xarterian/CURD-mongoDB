const router = require("express").Router();

const { postSignup, postLogin } = require("../controllers/auth.controller");


router.post("/login", postLogin )
router.post("/signup", postSignup)

module.exports = router