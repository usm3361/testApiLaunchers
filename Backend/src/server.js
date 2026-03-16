import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import launchersRoutes from "./routes/launchers.route.js";

const app = express();
const PORT = process.env.PORT_SERVER || 3000;

app.use(express.json());

connectDb();

app.use("/api/launchers", launchersRoutes);

app.listen(PORT, async () => {
  console.log(`server is running on ${PORT}...`);
});
