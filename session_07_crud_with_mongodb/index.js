import { config } from "dotenv";
config();
import express from "express";
import dbConnect from "./configs/connectDB.js";
import initRoute from "./routes/index.js";

const app = express();
const PORT = process.env.PORT;

initRoute(app);

dbConnect();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
