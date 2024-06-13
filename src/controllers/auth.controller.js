const AuthServices = require("../services/auth.service");

const AuthServicesInstance = new AuthServices();

const postSignup = async (req, res) => {
  try {
    const result = await AuthServicesInstance.signup(req.body);
    res.json(result);
  } catch (error) {    
      res.status(500).json({ message: "Failed to create new user", error });
  }
};

const postLogin = async (req, res) => {
  try {
    const result = await AuthServicesInstance.login(req.body);    
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: "Failed to access user", error });
  }
};

module.exports = { postSignup, postLogin };