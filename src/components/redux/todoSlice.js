import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk('todos', async () => {
  try {
    const res = await axios.get('https://malikhamzaa.pythonanywhere.com/todolist/', { headers: { "ngrok-skip-browser-warning": "tests" } });
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const addTodo = createAsyncThunk('addTodo', async (newTask) => {
  try {
    const res = await axios.post(
      'https://malikhamzaa.pythonanywhere.com/todolist/',
      { title: newTask },
      { headers: { "ngrok-skip-browser-warning": "tests" } }
    );
   
  } catch (error) {
    console.error('Add Todo Error:', error.response ? error.response.data : error.message);
    throw error;
  }
});

export const deleteTodo = createAsyncThunk('deleteTodo', async (id) => {
  try {
    await axios.delete(`https://malikhamzaa.pythonanywhere.com/todolist/${id}/`,
     {headers: { "ngrok-skip-browser-warning": "tests" }});

  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const updateTodoTitle = createAsyncThunk('updateTodoTitle', async ({ id, updatedTitle }) => {
  try {
    const res = await axios.put(
      `https://malikhamzaa.pythonanywhere.com/todolist/${id}/`,
      { title: updatedTitle },
      { headers: { "ngrok-skip-browser-warning": "tests" } }
    );
  
  } catch (error) {
    console.error(error);
    throw error;
  }
});
export const checkboxToggle = createAsyncThunk('checkboxToggle', async ({id ,completed}) => {
  try {
    await axios.patch(
      `https://malikhamzaa.pythonanywhere.com/todolist/${id}/`,
      {completed},
      { headers: { "ngrok-skip-browser-warning": "tests" } }
    );
    return {id,completed}
  } catch (error) {
    console.error(error);
    throw error;
  }
});


const TodoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
  },
});

export default TodoSlice.reducer;
export const { todoFunctions } = TodoSlice.actions;
