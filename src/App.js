// import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Wrapper from "./components/Helpers/Wrapper";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Dashboard from "./components/Dashboard";
import EditUserData from "./components/EditUserData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      { path: "/", element: <LoginForm /> },
      { path: "/register", element: <RegistrationForm /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/editUserData", element: <EditUserData /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
