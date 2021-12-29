import express, { Router, Request, Response } from "express";
import { createTodo, getTodos } from "../controllers/todos";

const router: Router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);

export default router;
