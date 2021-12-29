import express, { Express, Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import todoRoutes from "./routes/todos";

dotenv.config({ path: __dirname.substring(0, __dirname.length - 3) + ".env" });

const app: Express = express();

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "mongodb://localhost:27017/todo_list";
app.use("/todos", todoRoutes);
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req: Request, res: Response) =>
  res.send("Express + TypeScript Server")
);

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${PORT}`
      );
    })
  )
  .catch((error) => console.error(error));
