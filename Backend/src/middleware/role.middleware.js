export const allowRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.type)) {
      return res.status(403).json({ msg: "Not possible" });
    }
    next();
  };
};
