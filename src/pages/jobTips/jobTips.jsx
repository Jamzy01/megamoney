import React from "react";
import PageSetup from "../../components/page/pageSetup";
import PageHeading from "../../components/pageHeading/pageHeading";
import PageSubHeading from "../../components/pageHeading/pageSubHeading";
import {
  Box,
  HStack,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

function SubTip({ title, desc }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="4"
      flex={1}
      justifyContent="center"
      alignItems="center"
      padding="8"
      bg="blackAlpha.50"
      shadow="md"
      borderRadius="md"
      textAlign="center"
    >
      <Text
        maxWidth="80%"
        fontWeight="500"
        fontSize={{ base: "md", sm: "md", lg: "lg" }}
      >
        {title}
      </Text>
      <Text fontSize={{ base: "sm", sm: "sm", lg: "md" }}>{desc}</Text>
    </Box>
  );
}

function JobTips() {
  return (
    <PageSetup>
      <PageHeading>Job Tips</PageHeading>
      <Box marginTop="16" display="flex" flexDirection="column" gap="4">
        <PageSubHeading
          bg={useColorModeValue("yellow.300", "blue.700")}
          padding="4"
          borderRadius="md"
        >
          1. Choose Your Job
        </PageSubHeading>
        <Box display="flex" gap="4">
          <SubTip
            title="Consider your interests, strengths and weaknesses"
            desc="Think to yourself, what do I like doing, what am I good at?
            Think about your strengths and weaknesses, and base your job search around that and you will
            find yourself with doing work that is easy and/or enjoyable"
          />
          <SubTip title="Test" />
          <SubTip title="Test" />
        </Box>
        <PageSubHeading
          bg={useColorModeValue("green.200", "green.700")}
          padding="4"
          borderRadius="md"
        >
          2. The Resume
        </PageSubHeading>
        <PageSubHeading
          bg={useColorModeValue("red.300", "purple.800")}
          padding="4"
          borderRadius="md"
        >
          3. The Interview
        </PageSubHeading>
        <PageSubHeading
          bg={useColorModeValue("yellow.300", "teal.700")}
          padding="4"
          borderRadius="md"
        >
          4. The Job
        </PageSubHeading>
      </Box>
    </PageSetup>
  );
}

export default JobTips;
