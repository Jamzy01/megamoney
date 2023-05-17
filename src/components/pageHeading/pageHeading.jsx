import { Heading } from "@chakra-ui/react";
import React from "react";

function PageHeading({ title }) {
  return (
    <Heading
      fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
      textAlign={{ base: "center", md: "left" }}
    >
      {title}
    </Heading>
  );
}

export default PageHeading;
