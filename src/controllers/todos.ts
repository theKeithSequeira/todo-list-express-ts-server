import { Request, Response } from "express";
import TodoModel from "../models/todo";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await TodoModel.find();
    console.log(todos);
    res.status(200).json(todos);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
    console.log(typeof error);
  }
};

export const createTodo = async (req: Request, res: Response) => {
  const todo = req.body;
  const newTodo = new TodoModel(todo);
  try {
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
    console.log(typeof error);
  }
};
