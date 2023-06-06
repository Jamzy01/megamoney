import { Text } from "@chakra-ui/react";
import React from "react";

function ResponsiveBodyText({ children, textAlign = "left", ...rest }) {
  return (
    <Text
      fontSize={{ base: "md", sm: "md", md: "lg", lg: "xl" }}
      textAlign={{ sm: "center", md: textAlign }}
      {...rest}
    >
      {children}
    </Text>
  );
}

export default ResponsiveBodyText;
