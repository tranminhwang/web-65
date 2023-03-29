import express from "express";
import todoRouter from "./routes/todoRoutes.js";
import authRouter from "./routes/authRoutes.js";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
