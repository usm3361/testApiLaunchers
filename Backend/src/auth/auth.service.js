import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (data) => {
  const exist = await User.findOne({ username: data.username });
  if (exist) throw new Error("The user already exists");
  const findUserType = await User.findOne({ user_type: data.user_type });
  if (findUserType) {
    return { ok: false, msg: "user_type aalready exists, choich another type" };
  }
  const hash = await bcrypt.hash(data.password, 10);
  const user = await User.create({ ...data, password: hash });
  return { ok: true, user };
};

export const login = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) throw new Error("The username not found");
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Password does not match");
  user.last_login = new Date();
  await user.save();
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
      type: user.user_type,
    },
    process.env.JWT_SECRET,
    { expiresIn: "2h" },
  );
  return { token };
};

export const getUser = async (id) => {
  return User.findById(id);
};

export const getAllUsers = async () => {
  return User.find();
};

export const updateUser = async (id, data) => {
  return User.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUser = async (id) => {
  return User.findByIdAndDelete(id);
};
