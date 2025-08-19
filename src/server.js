import { app } from "./app.js";
import connection from "./config/db.config.js";
import fs from 'fs'

const sql=fs.readFileSync('./sql/init.sql', 'utf8');

async function startServer() {
  try {
    // const [rows] = await connection.query("SELECT 1");
    console.log("Database connected successfully");
    await connection.query(sql);
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}

startServer();
