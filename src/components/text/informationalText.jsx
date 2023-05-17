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
  Text,
} from "@chakra-ui/react";
import React from "react";

function InformationalText({ children, title, desc }) {
  return (
    <Text position="relative">
      {children}
      <Popover>
        <PopoverTrigger>
          <Button
            position="absolute"
            height="100%"
            left="calc(var(--chakra-space-1) * -0.2)"
            right="calc(var(--chakra-space-1) * -0.2)"
            bg="yellow.300"
            opacity={0.3}
            borderRadius="md"
            cursor="pointer"
            _hover={{
              opacity: 0.4,
            }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverCloseButton />
          <PopoverHeader>{title}</PopoverHeader>
          <PopoverBody>{desc}</PopoverBody>
        </PopoverContent>
      </Popover>
    </Text>
  );
}

export default InformationalText;
