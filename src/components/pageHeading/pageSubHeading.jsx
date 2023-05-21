import { Heading } from "@chakra-ui/react";
import React from "react";

function PageSubHeading({ children, ...rest }) {
  return (
    <Heading
      marginBottom="8"
      textAlign={{ base: "center", sm: "center", md: "left" }}
      {...rest}
    >
      {children}
    </Heading>
  );
}

export default PageSubHeading;
