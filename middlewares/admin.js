function admin(req, res, next) {
    if (req.user.role != "admin")
    console.log(req.user);
      return res.status(403).send("You are not authorized");
    next();

  }
  module.exports = admin;