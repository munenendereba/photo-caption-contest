import User from "../db/models/user.js";
import passwordServices from "../services/password_services.js";

const createUser = async (request, response) => {
  const { username, password } = request.body;
  const lowerUsername = username.toLowerCase();

  const hashedPassword = await passwordServices.hashPassword(password);

  const newUser = {
    username: lowerUsername,
    password: hashedPassword,
  };

  User.create(newUser)
    .then((user) => {
      response.status(201).json(user);
    })
    .catch((error) => {
      response.status(500).send("An error occurred while creating user.");
      console.log("Error creating user: ", error);
    });
};

export default { createUser };
