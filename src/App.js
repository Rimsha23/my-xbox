import React , {useState} from 'react'

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Login from "./pages/login";
import Register from "./pages/login/register";
import './App.css';
import Front from "./pages/front";
import Home from "./pages/home";
import Dashboard from "./components/dashboard";
import Practice from "./pages/practice";
import About from "./pages/about";
import GuessingGame from './pages/guessing game';
import Alert from './components/alert';
import { loader } from './components/dashboard';
import UserForm from './pages/hooks/hooks';
import Slide from './pages/slides';
import MapComponent from './components/googlemap';
import CardSlider from './pages/slide';
import {Todo} from './pages/practice/todo2';
import { TodoList } from './pages/practice/todo';
//import Form from './components/dashboard/form';
//import { TodoList } from './pages/practice/todo';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Front />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader : loader
  },
  {
    path: "/practice",
    element: <Practice />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/guessgame",
    element: < GuessingGame/>
  },
  {
    path: "/counter",
    element: <UserForm />
  },
  
  {
    path: "/map",
    element: <MapComponent />
  },
  {
    path: "/todolist",
    element: <TodoList/>
  },
  {
    path: "/todo",
    element: <Todo/>
  },
]);
function App() {
  return (
    <>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    </>
  );
}

export default App;
