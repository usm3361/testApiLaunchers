import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import launchersRoutes from "./routes/launchers.route.js";
import authRoutes from "./routes/auth.route.js"
import cors from "cors";

const app = express();
const PORT = process.env.PORT_SERVER || 3000;

app.use(express.json());
app.use(cors());

connectDb();

app.use("/api/launchers", launchersRoutes);
app.use("/api/auth", authRoutes)

app.use((error, _, res, __) => {
  res
    .status(error.status || 500)
    .send({ msg: error.message || "server internal error" });
});

app.listen(PORT, async () => {
  console.log(`server is running on ${PORT}...`);
});
