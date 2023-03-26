const authMiddleware = (req, res, next) => {
  // validate token
  const tokenIsValied = true;
  console.log("authMiddleware", req.test);

  if (tokenIsValied) {
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

export default authMiddleware;
