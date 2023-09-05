import React , {useState} from 'react'

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/login/register";
import './App.css';
import Front from "./pages/front";
import Home from "./pages/home";
import Dashboard from "./components/dashboard";
import Practice from "./pages/practice";
import About from "./pages/about";
import Alert from './components/alert';
import { loader } from './components/dashboard';
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

]);
function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
