export const allowRoles = (...roles) => {
  return (req, res, next) => {
    const userType = req.user.type;
    if (!["admin", "intel"].includes(userType)) {
      if (!roles.includes("airforce")) {
        return res.status(403).json({ msg: "Not possible" });
      }
      return next();
    }
    if (!roles.includes(userType)) {
      return res.status(403).json({ msg: "Not possible" });
    }
    next();
  };
};
