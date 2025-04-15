import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
    const [title, setTitle] = useState("");

    const handleAddTodo = () => {
        if (title.trim() !== "") {
            onAdd(title);
            setTitle(""); // Reset input field after adding
        } else {
            alert("Please enter a title");
        }
    };

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default AddTodo;
