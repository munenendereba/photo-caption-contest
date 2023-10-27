import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import morganBody from "morgan-body";
import userMethods from "./controllers/user_controller.js";
import imageMethods from "./controllers/image_controller.js";
import passport from "passport";
import LocalStrategy from "passport-local";
import session from "express-session";
import { checkUserLoggedIn, authenticateUser } from "./services/auth.js";

const app = express();
configDotenv();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

morganBody(app);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.session());
//userMethods.authenticateUser
passport.use(new LocalStrategy(authenticateUser));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
  });

  res.redirect("/login");
});

app.get("/", checkUserLoggedIn, (req, res) => {
  console.log("req.user: ", req.user.username);
  res.render("index.ejs", { username: req.user.username });
});

app.post("/user", userMethods.createUser);
app.post("/user/login", userMethods.authenticateUser);
app.get("/user/all", userMethods.getUsers);
app.get("/user", userMethods.getUserByUsername);
app.put("/user", userMethods.updateUser);
app.put("/change-password", userMethods.changePassword);
app.delete("/user", userMethods.deleteUser);

app.post("/image", imageMethods.createImage);
app.get("/image", imageMethods.getImage);
app.put("/image", imageMethods.updateImage);
app.delete("/image", imageMethods.deleteImage);
app.get("/image/all", imageMethods.getImages);

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}`);
});
