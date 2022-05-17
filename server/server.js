import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());

import connectDB from "./db/connect.js";
import AuditStrategiqueRoutes from "./routes/AuditStrategiqueRoutes.js";

app.use(express.json());
console.log("Helloooo");

app.use("/audit-strategique", AuditStrategiqueRoutes);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    //The server will run if the connection succeeded
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
