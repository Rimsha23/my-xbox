import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Charge your laptop', completed: false },
    { id: 2, title: 'Buy apples', completed: false }
  ]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const addTask = () => {
    const newTaskObject = { id: tasks.length + 1, title: newTask, completed: false };
    setTasks([...tasks, newTaskObject]);
    setNewTask('');
  };

  const removeTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setNewTask(tasks[index]);
  };

  const saveEdit = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = newTask;
    setTasks(updatedTasks);
    setEditingIndex(-1);
    setNewTask('');
  };

  const cancelEdit = () => {
    setEditingIndex(-1);
    setNewTask('');
  };
  const toggleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  return (
    <>
      <div className="max-w-md mx-auto h-auto mt-8 p-4 border border-gray-300 rounded">
        <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded w-full mr-2"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          {editingIndex === -1 ? (
            <button
              className='p-2 bg-blue-600 text-white rounded hover:bg-blue-400 active:border-2 active:border-black'
              onClick={addTask}
            >
              Add
            </button>
          ) : (
            <>
              <button
                className='p-2 bg-green-600 text-white rounded hover:bg-green-400 active:border-2 active:border-black'
                onClick={saveEdit}
              >
                Save
              </button>
              <button
                className='p-2 bg-gray-600 text-white rounded hover:bg-gray-400 active:border-2 active:border-black ml-2'
                onClick={cancelEdit}
              >
                Cancel
              </button>
            </>
          )}
        </div>
        <ul id='tasklist'>
          {tasks.map((task, index) => (
            <li key={index} className="flex p-2 justify-between items-center border-b text-gray-600 border-gray-300">
              <div className='flex-row'>
              <input
                  type='checkbox'
                  className='mr-2'
                  checked={task.completed}
                  onChange={() => toggleCompleted(index)}
                />
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                  />
                ) : (
                  task.title
                )}
              </div>


              <button
                className="text-red-500 text-sm hover:underline active:text-xs"
                onClick={() => removeTask(index)}
              >
                Remove
              </button>


              <button
                className="text-blue-500 text-sm hover:underline active:text-xs ml-2"
                onClick={() => startEditing(index)}
              >
                Edit
              </button>

            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
