import React from "react";
import { Button } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Scams from "./pages/scams/scams";
import WiseConsumers from "./pages/wiseconsumers/wiseConsumers";
import JobTips from "./pages/jobtips/jobTips";
import FinancialGoals from "./pages/financialGoals/financialGoals";
import DecisionMaking from "./pages/decisionmaking/decisionmaking";

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
  {
    path: "/wiseconsumers",
    element: <WiseConsumers />,
  },
  {
    path: "/financialgoals",
    element: <FinancialGoals />,
  },
  {
    path: "/decisionmaking",
    element: <DecisionMaking />,
  },
  {
    path: "/jobtips",
    element: <JobTips />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
