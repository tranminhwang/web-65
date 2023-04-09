import express from "express";
import multer from "multer";
import path from "path";

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/static/images");
  },
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1000000, // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, callback) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      // upload only png and jpg format
      return callback(new Error("Please upload a Image"));
    }
    callback(undefined, true);
  },
});

uploadRouter.post("/avatar", upload.single("uploaded_file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({
      message: "Please upload a file",
    });
  }
  res.status(200).json({
    message: "Upload file success",
  });
});

export default uploadRouter;
