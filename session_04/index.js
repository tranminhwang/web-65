import express from "express";
import todoRouter from "./routes/todoRoutes.js";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use("/api/v1/todos", todoRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
