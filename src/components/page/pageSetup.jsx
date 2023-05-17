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
          sm: "16",
          md: "32",
          lg: "64",
        }}
        paddingY={{
          base: "4",
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
