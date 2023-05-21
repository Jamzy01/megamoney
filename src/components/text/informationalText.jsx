import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import React from "react";

function InformationalText({ children, title, desc }) {
  return (
    <Popover>
      <PopoverTrigger>
        <Text
          position="relative"
          as="mark"
          cursor="pointer"
          bg="yellow.200"
          paddingX="1"
          borderRadius="md"
        >
          {children}
        </Text>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverCloseButton />
          <PopoverHeader>{title}</PopoverHeader>
          <PopoverBody>{desc}</PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export default InformationalText;
