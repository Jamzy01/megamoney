import { Box } from "@chakra-ui/react";
import React from "react";
import Topbar from "../topbar/topbar";

function PageSetup({ children }) {
  return (
    <Box>
      <Topbar />
      <Box
        paddingX={{
          base: "var(--chakra-space-8)",
          sm: "var(--chakra-space-16)",
          md: "var(--chakra-space-32)",
        }}
        paddingY={{
          base: "var(--chakra-space-4)",
          sm: "var(--chakra-space-8)",
          md: "var(--chakra-space-16)",
        }}
        minHeight="100vh"
      >
        {children}
      </Box>
    </Box>
  );
}

export default PageSetup;
