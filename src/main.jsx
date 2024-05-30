import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home.jsx";
import RoomsBed from "./Components/RoomsBed.jsx";
import Gallery from "./Components/Gallery.jsx";
import Layout from "./Layout.jsx";
import Services from "./Components/Services.jsx";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/RoomsBed",
        element: <RoomsBed />,
      },

      {
        path: "/Gallery",
        element: <Gallery />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
