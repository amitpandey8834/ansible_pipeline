const express = require("express");
const router = express.Router();

// Simulate a database for todos
let todos = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Learn Node.js" },
  { id: 3, text: "Build a MERN app" }
];

// GET /get-todos: Fetch all todos
router.get("/get-todos", (req, res) => {
  res.json(todos);
});

// POST /add-todo: Add a new todo
router.post("/add-todo", (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ message: "Text is required for the todo" });
  }

  const newTodo = { id: todos.length + 1, text };
  todos.push(newTodo);
  res.json(newTodo);
});

module.exports = router;
