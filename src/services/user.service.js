const Users = require("../model/user.model");

class UserService {

  register = async (user) => {
    try {
      const {email, password } = user;
      const newUser = new Users({ email, password });
      const result = await newUser.save();
      return result;
    } catch (error) {
      throw error;
    }
  };

  findByEmail = async (email) => {
    try {
      const userResult = await Users.findOne({ email });
      return userResult;
    } catch (error) {
      throw error;
    }
  };

}

module.exports = UserService;