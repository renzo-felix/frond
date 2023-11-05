import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import About from "./componentes/about/About.jsx";
import Menu from "./componentes/Menu/Menu.jsx";
import Login from "./componentes/Login/Login.jsx";
import Signup from "./componentes/Signup/Signup.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "https://frond-ox3z.vercel.app/home",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  //Formato para agregar rutas:
  /*
  {
    path: "/ruta",
    element: <Nombre del componente que representa la pagina />,
  },
  */
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
