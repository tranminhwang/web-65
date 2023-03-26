const loggerMiddleware = (req, res, next) => {
  console.log("request", new Date().toISOString());
  // get data from json file
  req.test = {
    name: "test",
  };
  next();
};

export default loggerMiddleware;
