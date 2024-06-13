const UserService = require("./user.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserServiceInstance = new UserService();

class AuthServices {
  signup = async (user) => {
    try {
      const hashPassword = await this.encryptPassword(user.password);
      const result = await UserServiceInstance.register({
        ...user,
        password: hashPassword,
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

  encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  };

  verifyPassword = async (email, password) => {
    const user = await UserServiceInstance.findByEmail(email);
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      return user;
    } else {
      return null;
    }
  };

  login = async ({ email, password }) => {
    try {
      const user = await this.verifyPassword(email, password);
      if (user) {
        const token = this.generateToken(user._id);
        return {
          jwt: token,
          userId: user._id,
          email: user.email,
        };
      } else {
        throw("no user fornd")
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  generateToken = (userId) => {
    try {
      const secret = "xyz@123";
      const payLoad = { userId };
      const options = { expiresIn: "1h" };
      const token = jwt.sign(payLoad, secret, options);
      return token;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

module.exports = AuthServices;