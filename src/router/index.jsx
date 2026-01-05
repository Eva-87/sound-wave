import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Discover from "../pages/Discover";
import Join from "../pages/Join";
import Layout from "../layout/Layout";

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
            {
                path: "join",
                Component: Join 
            }
    ]
  }
  
]);


 