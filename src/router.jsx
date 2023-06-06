import React from "react";
import { Button } from "@chakra-ui/react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Scams from "./pages/scams/scams";
import WiseConsumers from "./pages/wiseconsumers/wiseConsumers";
import JobTips from "./pages/jobTips/jobTips";
import FinancialGoals from "./pages/financialGoals/financialGoals";
import DecisionMaking from "./pages/decisionMaking/decisionMaking";
import Credits from "./pages/credits/credits";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/megamoney",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/credits",
    element: <Credits />,
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
