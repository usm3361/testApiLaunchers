import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db.js";

const app = express();
const PORT = process.env.PORT_SERVER || 3000;

app.use(express.json());

// app.use("/api/launchers");

app.listen(PORT, async () => {
  await connectDb();
  console.log(`server is running on ${PORT}...`);
});
