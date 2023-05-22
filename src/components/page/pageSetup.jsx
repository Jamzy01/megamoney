import { Box } from "@chakra-ui/react";
import React from "react";
import Topbar from "../topbar/topbar";

function PageSetup({ children }) {
  return (
    <Box>
      <Topbar />
      <Box
        paddingX={{
          base: "8",
          sm: "8",
          md: "16",
          lg: "32",
          "2xl": 64,
        }}
        paddingY={{
          base: "6",
          sm: "8",
          md: "16",
        }}
        minHeight="100vh"
      >
        {children}
      </Box>
    </Box>
  );
}

export default PageSetup;
