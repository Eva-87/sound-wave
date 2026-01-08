// src/router/index.jsx

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Discover from "../pages/Discover";
import Join from "../pages/Join";
import Layout from "../layout/Layout";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

// 👉 AQUI agregas el import
import Charts from "../pages/discover/Charts";




export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home
      },
      { 
        path: "discover",
        Component: Discover
      },

      // 👉 AQUI agregas la ruta Charts
      {
        path: "discover/charts",
        Component: Charts
      },

      {
        path: "join",
        Component: Join 
      },
      {
        path: "about",
        Component: AboutUs
      },
      {
        path: "contact",
        Component: Contact
      }
    ]
  }
]);
