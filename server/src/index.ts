import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { authMiddleware } from "./middleware/authMiddleware";
/* route imports */
import tenantRoutes from "./routes/tenant";
import managerRoutes from "./routes/manager";
import propertyRoutes from "./routes/property";
import leaseRoutes from "./routes/lease";
import applicationRoutes from "./routes/application";

// configurations
dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes

app.get("/", (req, res) => {
  res.send("this is home route");
});

app.use("/properties", propertyRoutes);
app.use("/leases", leaseRoutes);
app.use("/applications", applicationRoutes);
app.use("/tenants", authMiddleware(["tenant"]), tenantRoutes);
app.use("/managers", authMiddleware(["manager"]), managerRoutes);

// server

const PORT = Number(process.env.PORT) || 3002;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
