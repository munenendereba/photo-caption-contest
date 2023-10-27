import { comparePassword } from "./password_services.js";
import User from "../db/models/user.js";

export const checkUserLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/login");

  //res.status(401).send("Unauthorized.");
};

export const authenticateUser = async (username, password, done) => {
  try {
    const lowerUsername = username.toLowerCase();
    const user = await User.findOne({ where: { username: lowerUsername } });

    if (!user) {
      return done(null, false, { message: "Invalid user." });
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return done(null, false, { message: "Invalid user." });
    }

    return done(null, user);
  } catch (error) {
    console.log("Error authenticating user: ", error);
    return done(error);
  }
};
