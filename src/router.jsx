import React from "react";
import { Button } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Scams from "./pages/scams/scams";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/scams",
    element: <Scams />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
