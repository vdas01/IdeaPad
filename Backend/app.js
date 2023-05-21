import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
import dotenv from 'dotenv'

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://vdas04:databasevd04@cluster0.fsxqvgj.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(port))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
