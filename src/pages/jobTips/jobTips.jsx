import React from "react";
import PageSetup from "../../components/page/pageSetup";
import PageHeading from "../../components/pageHeading/pageHeading";
import PageSubHeading from "../../components/pageHeading/pageSubHeading";
import {
  Box,
  HStack,
  Image,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import "./jobTips.css";

import selfExamine from "./assets/infoBackgrounds/jobChoosing/selfExamine.jpg";

function SubTip({ title, desc, bgImage }) {
  return (
    <Box
      className="sub-tip"
      display="flex"
      flexDirection="column"
      gap="4"
      flex={1}
      justifyContent="center"
      alignItems="center"
      padding="8"
      shadow="md"
      textAlign="center"
      position="relative"
      overflow="clip"
      borderRadius="md"
      borderStyle="solid"
      borderColor="blackAlpha.50"
      borderWidth="1px"
    >
      <Image
        position="absolute"
        src={bgImage}
        zIndex={-1}
        width="100%"
        height="100%"
        objectFit="cover"
        filter={useColorModeValue(
          "brightness(130%) blur(2px)",
          "contrast(75%) brightness(55%) blur(2px)"
        )}
        transform="scale(1.04)"
        transition="transform 1s ease-out"
        opacity={useColorModeValue(0.25, 1)}
      />
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
        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "column", xl: "row" }}
          gap="4"
        >
          <SubTip
            title="Consider your interests, strengths and weaknesses"
            desc="Think to yourself, what do I like doing, what am I good at?
            Think about your strengths and weaknesses, and base your job search around that and you will
            find yourself with doing work that is easy and/or enjoyable"
            bgImage={selfExamine}
          />
          <SubTip
            title="Analyse your long term goals"
            desc="Do you have long term plan in mind? If so, how will this job help you get there.
            If you want to see yourself"
          />
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
