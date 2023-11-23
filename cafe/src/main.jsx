import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import About from "./componentes/about/About.jsx";
// import Menu from "./componentes/Menu/Menu.jsx";
import Login from "./componentes/Login/Login.jsx";
import Signup from "./componentes/Signup/Signup.jsx";
import Features from "./componentes/features/Features.jsx";
// import Gallery from "./componentes/Gallery/Gallery.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/home/:token",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/about/:token",
    element: <About />,
  },
  // {
  //   path: "/menu",
  //   element: <Menu />,
  // },
  // {
  //   path: "/gallery",
  //   element: <Gallery />,
  // },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/features/:token",
    element: <Features />,
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
