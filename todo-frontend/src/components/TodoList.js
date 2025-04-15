import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import BACKEND_URL from "../config/config";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/get-todos`);
      
      if (!response.ok) {
        const errorText = await response.text(); // Read response as text for debugging
        console.error("Error fetching todos:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error.message);
    }
  };

  const addTodo = async (title) => {
    try {
      const response = await fetch(`${BACKEND_URL}/add-todo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });

      if (!response.ok) {
        const errorText = await response.text(); // Log error text if any
        console.error("Error response:", errorText);
        throw new Error(`Failed to add todo, status: ${response.status}`);
      }

      const newTodo = await response.json();
      setTodos((prev) => [...prev, newTodo]);
    } catch (error) {
      console.error("Error adding todo:", error.message);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
