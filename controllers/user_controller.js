import User from "../db/models/user.js";
import hashpassword from "../services/password_services.js";

const createUser = (request, response) => {
  const { username, password } = request.body;
  const hashedPassword = hashpassword(password);

  const newUser = {
    username,
    password: hashedPassword,
  };

  User.create({ username, password })
    .then((user) => {
      response.status(201).json(user);
    })
    .catch((error) => {
      response.status(500).json(error);
    });
};

export default { createUser };
