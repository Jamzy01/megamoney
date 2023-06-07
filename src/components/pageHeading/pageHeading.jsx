import { Heading } from "@chakra-ui/react";
import React from "react";

function PageHeading({ children, textAlign = "left", ...rest }) {
  return (
    <Heading
      fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl", xl: "5xl" }}
      textAlign={{ base: "center", md: textAlign }}
      marginBottom="4"
      {...rest}
    >
      {children}
    </Heading>
  );
}

export default PageHeading;
