const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const todoRoutes = require("./routes/todoRoutes");
const path = require("path");

dotenv.config();
const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // Update with your frontend URL
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api', todoRoutes); // This handles `/api/get-todos` and `/api/add-todo`

// Database connection
connectDB();

// Serve frontend (if applicable)
app.use(express.static(path.join(__dirname, "../todo-frontend/build")));

// Catch-all route for frontend routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../todo-frontend/build", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;
