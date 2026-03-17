import {
  deleteUser,
  getUser,
  login,
  register,
  updateUser,
} from "./auth.service";

export const registerControl = async (req, res) => {
  const result = await register(req.body);
  if (!result.ok) {
    return res.status(200).json(result);
  }
  res.status(201).json(result.user);
};

export const loginControl = async (req, res) => {
  const data = await login(req.body);
  res.json(data);
};

export const getUserControl = async (req, res) => {
  const user = await getUser(req.user.id);
  res.json(user);
};

export const updateUserControl = async (req, res) => {
  const user = await updateUser(req.user.id, req.body);
  res.json(user);
};

export const deleteUserControl = async (req, res) => {
  const user = await deleteUser(req.params.id);
  res.json({ msg: "deleted" });
};
