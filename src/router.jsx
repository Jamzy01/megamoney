import React from "react";
import { Button } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Scams from "./pages/scams/scams";
import WiseConsumers from "./pages/wiseconsumers/wiseConsumers";
import JobTips from "./pages/jobTips/jobTips";
import FinancialGoals from "./pages/financialGoals/financialGoals";
import DecisionMaking from "./pages/decisionMaking/decisionMaking";

const router = createBrowserRouter([
  {
    path: "/megamoney",
    element: <Home />,
  },
  {
    path: "/megamoney/home",
    element: <Home />,
  },
  {
    path: "/megamoney/scams",
    element: <Scams />,
  },
  {
    path: "/megamoney/wiseconsumers",
    element: <WiseConsumers />,
  },
  {
    path: "/megamoney/financialgoals",
    element: <FinancialGoals />,
  },
  {
    path: "/megamoney/decisionmaking",
    element: <DecisionMaking />,
  },
  {
    path: "/megamoney/jobtips",
    element: <JobTips />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
