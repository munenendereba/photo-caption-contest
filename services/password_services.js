import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (error) {
    console.log("Error hashing password: ", error);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);

    return match;
  } catch (error) {
    console.log("Error comparing password: ", error);
  }
};
