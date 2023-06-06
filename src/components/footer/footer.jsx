import {
  Box,
  Button,
  Circle,
  Link as ChakraLink,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      padding="8"
      display="flex"
      flexDirection={{ base: "column", sm: "column", md: "row" }}
      gap="1"
      justifyContent="space-between"
      alignItems="center"
      fontSize={{ base: "sm", sm: "sm", md: "md" }}
    >
      <Text>
        Website by{" "}
        <ChakraLink
          color={useColorModeValue("blue.700", "blue.100")}
          href="https://github.com/Jamzy01"
          isExternal
        >
          James Gaunt
        </ChakraLink>
      </Text>
      <Text textAlign="right">
        <ChakraLink color={useColorModeValue("blue.700", "blue.100")}>
          <RouterLink to="/credits">Credits and Attribution</RouterLink>
        </ChakraLink>
      </Text>
    </Box>
  );
}

export default Footer;
