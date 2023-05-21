import {
  Box,
  Button,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

function WiseConsumerTip({ title, desc, image }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GridItem
        transform={`scale(${open ? 1.1 : 1})`}
        opacity={open ? 0 : 1}
        display="flex"
        gap="4"
        flexDirection="column"
        bg={useColorModeValue("blackAlpha.100", "blackAlpha.200")}
        borderColor={useColorModeValue("blackAlpha.100", "blackAlpha.300")}
        borderStyle="solid"
        borderWidth="0.1em"
        padding="4"
        borderRadius="md"
        shadow="md"
        transition="translate 0.4s, box-shadow 0.4s, transform 0.1s ease-in, opacity 0.1s ease-out"
        cursor="pointer"
        _hover={{
          shadow: "lg",
          translate: "0px calc(var(--chakra-space-1) * -1)",
        }}
        onClick={() => {
          console.log("Open");

          setOpen(true);
        }}
      >
        <Text fontSize={{ base: "md", sm: "lg", lg: "lg" }} textAlign="center">
          {title}
        </Text>
        <Box display="flex" alignItems="end" flex={1}>
          <Image
            src={image}
            borderRadius="md"
            aspectRatio={16 / 10}
            width="100%"
            objectFit="cover"
          />
        </Box>
      </GridItem>
      <Modal
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
        size="2xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="lg">{desc}</Text>
            <Image
              marginTop="4"
              src={image}
              borderRadius="md"
              aspectRatio={16 / 10}
              width="100%"
              objectFit="cover"
            />
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default WiseConsumerTip;
