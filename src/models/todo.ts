import mongoose, { Schema, model } from "mongoose";
import Todo from "./TodoType";

const todoSchema = new Schema<Todo>({
  todoId: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: false },
  isComplete: { type: Boolean, required: true },
});

const TodoModel = model<Todo>("TodoModel", todoSchema);

export default TodoModel;
