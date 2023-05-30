import { Heading } from "@chakra-ui/react";
import React from "react";

function PageSubHeading({ children, ...rest }) {
  return (
    <Heading textAlign={{ base: "center", sm: "center", md: "left" }} {...rest}>
      {children}
    </Heading>
  );
}

export default PageSubHeading;
