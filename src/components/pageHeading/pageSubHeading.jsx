import { Heading } from "@chakra-ui/react";
import React from "react";

function PageSubHeading({ children, textAlign = "left", ...rest }) {
  return (
    <Heading
      fontSize={{ base: "lg", sm: "lg", md: "xl", lg: "2xl" }}
      textAlign={{ base: "center", sm: "center", md: textAlign }}
      {...rest}
    >
      {children}
    </Heading>
  );
}

export default PageSubHeading;
