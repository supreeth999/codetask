import React, { useState } from 'react';

function TodoForm() {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [createdTodoId, setCreatedTodoId] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCompletedChange = (e) => {
    setCompleted(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          completed: completed,
        }),
      });

      const data = await response.json();
      setCreatedTodoId(data.id);
      setTitle('');
      setCompleted(false);
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  return (
    <div>
      <h1>Todo Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} required />
        </div>
        <div>
          <label htmlFor="completed">Completed:</label>
          <input type="checkbox" id="completed" checked={completed} onChange={handleCompletedChange} />
        </div>
        <button type="submit">Create Todo</button>
      </form>

      {createdTodoId && (
        <div>
          <p>Created Todo ID: {createdTodoId}</p>
        </div>
      )}
    </div>
  );
}

export default TodoForm;
