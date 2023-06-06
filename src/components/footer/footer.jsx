import {
  Box,
  Button,
  Circle,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      padding="8"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      fontSize={{ base: "sm", sm: "sm", md: "md" }}
    >
      <Text>
        Website by{" "}
        <Link
          color={useColorModeValue("blue.700", "blue.100")}
          href="https://github.com/Jamzy01"
          isExternal
        >
          James Gaunt
        </Link>
      </Text>
      <Text textAlign="right">Made with React + Chakra UI</Text>
    </Box>
  );
}

export default Footer;
