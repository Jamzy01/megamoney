import { Heading } from "@chakra-ui/react";
import React from "react";

function PageHeading({ children, ...rest }) {
  return (
    <Heading
      fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
      textAlign={{ base: "center", md: "left" }}
      marginBottom="4"
      {...rest}
    >
      {children}
    </Heading>
  );
}

export default PageHeading;
