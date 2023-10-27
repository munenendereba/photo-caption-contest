import User from "../db/models/user.js";
import {
  hashPassword,
  comparePassword,
} from "../services/password_services.js";

const createUser = async (request, response) => {
  const { username, password } = request.body;
  const lowerUsername = username.toLowerCase();

  const hashedPassword = await hashPassword(password);

  const newUser = {
    username: lowerUsername,
    password: hashedPassword,
  };

  User.create(newUser)
    .then((user) => {
      response.status(201).send(user);
    })
    .catch((error) => {
      response.status(500).send("An error occurred while creating user.");
      console.log("Error creating user: ", error);
    });
};

const getUserById = (request, response) => {
  const { id } = request.body;

  User.findOne({
    where: { id },
  })
    .then((user) => {
      user
        ? response.status(200).send(user)
        : response.status(404).send("User not found.");
    })
    .catch((error) => {
      response.status(500).send("An error occurred while getting user.");
      console.log("Error getting user: ", error);
    });
};

const getUserByUsername = (request, response) => {
  const { username } = request.body;
  const lowerUsername = username.toLowerCase();

  User.findOne({
    where: { username: lowerUsername },
  })
    .then((user) => {
      user
        ? response.status(200).send(user)
        : response.status(404).send("User not found.");
    })
    .catch((error) => {
      response.status(500).send("An error occurred while getting user.");
      console.log("Error getting user: ", error);
    });
};

const updateUser = async (request, response) => {
  const { username, status } = request.body;
  const lowerUsername = username.toLowerCase();

  const updatedUser = {
    username: lowerUsername,
    status: status,
  };

  User.update(updatedUser, { where: { username: lowerUsername } })
    .then((user) => {
      user
        ? response.status(200)
        : response.status(404).send("User not found.");
    })
    .catch((error) => {
      response.status(500).send("An error occurred while updating user.");
      console.log("Error updating user: ", error);
    });
};

const changePassword = async (request, response) => {
  const { username, password } = request.body;
  const lowerUsername = username.toLowerCase();

  const hashedPassword = await passwordServices.hashPassword(password);

  const updatedUser = {
    username: lowerUsername,
    password: hashedPassword,
  };

  User.update(updatedUser, { where: { username: lowerUsername } })
    .then((res) => {
      res[0] === 1
        ? response.status(200).send()
        : response.status(404).send("User not found.");
    })
    .catch((error) => {
      response.status(500).send("An error occurred while updating user.");
      console.log("Error updating user: ", error);
    });
};

const deleteUser = (request, response) => {
  const { username } = request.body;
  const lowerUsername = username.toLowerCase();

  User.destroy({ where: { username: lowerUsername } })
    .then((res) => {
      res === 1
        ? response.status(200).send()
        : response.status(404).send("User not found.");
    })
    .catch((error) => {
      response.status(500).send("An error occurred while deleting user.");
      console.log("Error deleting user: ", error);
    });
};

const getUsers = (request, response) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((users) => {
      users
        ? response.status(200).send(users)
        : response.status(404).send("Users not found.");
    })
    .catch((error) => {
      response.status(500).send("An error occurred while getting users.");
      console.log("Error getting users: ", error);
    });
};

const authenticateUser = async (request, response, done) => {
  const { username, password } = request.body;
  const lowerUsername = username.toLowerCase();

  const user = await User.findOne({
    where: { username: lowerUsername },
  });

  if (!user) {
    response.status(401).send("Invalid credentials.");
    return done(null, false);
  }

  const isPasswordValid = await comparePassword(password, user.password);

  if (!isPasswordValid) {
    response.status(401).send("Invalid credentials.");
    return done(null, false);
  }

  response.status(200).send(); //return successfully logged in
  return done(null, user);
};

export default {
  createUser,
  getUserById,
  getUserByUsername,
  updateUser,
  changePassword,
  deleteUser,
  getUsers,
  authenticateUser,
};
