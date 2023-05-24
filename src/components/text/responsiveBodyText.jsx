import { Text } from "@chakra-ui/react";
import React from "react";

function ResponsiveBodyText({ children, ...rest }) {
  return (
    <Text
      fontSize={{ base: "md", sm: "md", md: "lg", lg: "xl" }}
      textAlign={{ sm: "center", md: "left" }}
      {...rest}
    >
      {children}
    </Text>
  );
}

export default ResponsiveBodyText;
