import path from "path";
import fs from "fs";
const PATH = path.join("resources", "todoResource.json");

const getTodoResourceMiddleware = (req, res, next) => {
  try {
    const fileData = fs.readFileSync(PATH, "utf-8");
    const dataJSON = JSON.parse(fileData);
    req.todoResource = dataJSON;
    next();
  } catch {
    res.status(500).json({
      message: "bad request",
      data: null,
    });
  }
};

export default getTodoResourceMiddleware;
