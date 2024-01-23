import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, deleteTodo, addTodo, updateTodoTitle,checkboxToggle  } from '../../components/redux/todoSlice';

export const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const addTask = () => {
    dispatch(addTodo(newTask));
    setNewTask('');
  };

  const removeTask = (index) => {
    dispatch(deleteTodo(todos[index].id));
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setNewTask(todos[index].title);
  };
  const saveEdit = () => {
    dispatch(updateTodoTitle({ id: todos[editingIndex].id, updatedTitle: newTask }));
    setNewTask('');
    setEditingIndex(-1);
  };

  const cancelEdit = () => {
    setNewTask('');
    setEditingIndex(-1);
  };
  const handleCheckboxChange = (id, completed) => {
    dispatch(checkboxToggle({id,completed:!completed}))
  }
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
                className='p-2 bg-red-600 text-white rounded hover:bg-red-400 active:border-2 active:border-black ml-2'
                onClick={cancelEdit}
              >
                Cancel
              </button>
            </>
          )}
        </div>
        <ul id='tasklist'>
          {todos.map((e, index) => (
            <li key={index} className="flex p-2 justify-between items-center border-b text-gray-600 border-gray-300">
              <div className='flex-row'>
                <input type='checkbox' className='mr-2' checked={e.completed} onChange={() => handleCheckboxChange(e.id , e.completed)} />
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                  />
                ) : (
                  e.title
                )}
              </div>
              <div className='flex flex-row'>
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

              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
