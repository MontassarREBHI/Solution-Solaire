// index.js
require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
// const itemRoutes = require("./routes/itemRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
// app.use("/api", itemRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
