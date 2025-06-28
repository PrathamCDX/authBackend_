import express from "express";
import sequelize from "./config/database";
import authRouter from "./routes/authRoutes";
import adminRouter from "./routes/adminRoutes";

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

app.use("/api/admin", adminRouter);

const PORT = 5000;

sequelize
  .sync()
  .then(() => {
    console.log("Database connected & tables synced");
    app.listen(PORT, () =>
      console.log(`Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("Unable to connect to the database:", err));
