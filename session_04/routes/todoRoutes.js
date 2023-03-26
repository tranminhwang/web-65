import express from "express";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import loggerMiddleware from "../middlewares/loggerMiddleware.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import getTodoResourceMiddleware from "../middlewares/getTodoResourceMiddleware.js";

const todoRouter = express.Router();
const TODO_RESOURCE_PATH = path.join("resources", "todoResource.json");

todoRouter.get("/", getTodoResourceMiddleware, (req, res) => {
  try {
    res.status(200).json({
      message: "read success",
      data: req.todoResource,
    });
  } catch {
    res.status(500).json({
      message: "read fail",
      data: null,
    });
  }
}); // get all: api/v1/todos

todoRouter.get("/:todoId", getTodoResourceMiddleware, (req, res) => {
  const todoId = req.params.todoId;
  const todo = req.todoResource.find((todo) => todo.id === todoId);
  if (todo) {
    res.status(200).json({
      message: "read success",
      data: todo,
    });
  } else {
    res.status(404).json({
      message: "todo not found",
      data: null,
    });
  }
}); // api/v1/todos/1

todoRouter.post("/", getTodoResourceMiddleware, (req, res) => {
  try {
    const { title, isCompleted } = req.body;
    const newTodo = {
      id: uuidv4(),
      title,
      isCompleted,
    };
    const dataJSON = req.todoResource;
    dataJSON.push(newTodo);
    fs.writeFileSync(TODO_RESOURCE_PATH, JSON.stringify(dataJSON));
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

todoRouter.put("/:todoId", getTodoResourceMiddleware, (req, res) => {
  try {
    const todoId = req.params.todoId;
    const dataJSON = req.todoResource;
    const newTodoList = dataJSON.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          ...req.body,
        };
      }
      return todo;
    });

    fs.writeFileSync(TODO_RESOURCE_PATH, JSON.stringify(newTodoList));
    res.status(200).json({
      message: "update success",
      data: newTodoList,
    });
  } catch {
    res.status(500).json({
      message: "update fail",
      data: null,
    });
  }
}); // api/v1/todos/1

todoRouter.delete("/:todoId", getTodoResourceMiddleware, (req, res) => {
  try {
    const todoId = req.params.todoId;
    const dataJSON = req.todoResource;
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
