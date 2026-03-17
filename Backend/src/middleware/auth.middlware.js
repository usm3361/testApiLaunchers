import jwt from "jsonwebtoken";

export const authMiddlware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ msg: "no token" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ msg: "invalid token" });
  }
};
