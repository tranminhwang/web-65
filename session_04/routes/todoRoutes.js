import express from "express";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import loggerMiddleware from "../middlewares/loggerMiddleware.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const todoRouter = express.Router();
const TODO_RESOURCE_PATH = path.join("resources", "todoResource.json");

todoRouter.get("/", loggerMiddleware, authMiddleware, (req, res) => {
  try {
    console.log("GET");
    // step 1: read file todoResource.json
    const fileData = fs.readFileSync(TODO_RESOURCE_PATH, "utf-8");
    // step 2: parse json to js object
    const dataJSON = JSON.parse(fileData);
    // step 3; send data to client
    res.status(200).json({
      message: "read success",
      data: dataJSON,
    });
  } catch {
    res.status(500).json({
      message: "read fail",
      data: null,
    });
  }
}); // get all: api/v1/todos

todoRouter.get("/:todoId", loggerMiddleware, (req, res) => {}); // api/v1/todos/1

todoRouter.post("/", (req, res) => {
  try {
    // step 1: get data from client
    const { title, isCompleted } = req.body;
    // step 2: create a new todo object
    const newTodo = {
      id: uuidv4(),
      title,
      isCompleted,
    };
    // step 3: read file todoResource.json
    const fileData = fs.readFileSync(TODO_RESOURCE_PATH, "utf-8");
    // step 4: parse json to js object
    const dataJSON = JSON.parse(fileData);
    // step 5: push new todo object to dataJSON
    dataJSON.push(newTodo);
    // step 6: write dataJSON to todoResource.json
    fs.writeFileSync(TODO_RESOURCE_PATH, JSON.stringify(dataJSON));
    // step 7: send data to client
    res.status(201).json({
      message: "create success",
      data: dataJSON,
    });
  } catch {
    res.status(500).json({
      message: "create fail",
      data: null,
    });
  }
}); // api/v1/todos

todoRouter.put("/:todoId", (req, res) => {}); // api/v1/todos/1

todoRouter.delete("/:todoId", (req, res) => {
  try {
    // step 1: get todoId from client
    const todoId = req.params.todoId;
    // step 2: read file todoResource.json
    const fileData = fs.readFileSync(TODO_RESOURCE_PATH, "utf-8");
    const dataJSON = JSON.parse(fileData);

    const newTodoList = dataJSON.filter((todo) => todo.id != todoId);
    fs.writeFileSync(TODO_RESOURCE_PATH, JSON.stringify(newTodoList));

    res.status(200).json({
      message: "delete success",
      data: newTodoList,
    });
  } catch {
    res.status(500).json({
      message: "delete fail",
      data: null,
    });
  }
}); // api/v1/todos/1

export default todoRouter;
