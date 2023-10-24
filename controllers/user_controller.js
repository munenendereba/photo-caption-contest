import User from "../db/models/user.js";
import passwordServices from "../services/password_services.js";

const createUser = (request, response) => {
  const { username, password } = request.body;
  const hashedPassword = passwordServices.hashPassword(password);

  const newUser = {
    username,
    password: hashedPassword,
  };

  User.create({ username, password })
    .then((user) => {
      response.status(201).json(user);
    })
    .catch((error) => {
      response.status(500).send("An error occurred while creating user.");
      console.log("Error creating user: ", error);
    });
};

export default { createUser };
