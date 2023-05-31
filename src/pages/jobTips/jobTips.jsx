import React from "react";
import PageSetup from "../../components/page/pageSetup";
import PageHeading from "../../components/pageHeading/pageHeading";
import PageSubHeading from "../../components/pageHeading/pageSubHeading";
import {
  Box,
  HStack,
  OrderedList,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

function JobTips() {
  return (
    <PageSetup>
      <PageHeading>Job Tips</PageHeading>
      <Box display="flex" flexDirection="column" gap="4">
        <PageSubHeading
          bg="yellow.400"
          padding="4"
          borderRadius="var(--chakra-radii-md) var(--chakra-radii-md) 0 0"
        >
          1. Choose Your Job
        </PageSubHeading>
        <PageSubHeading bg="green.200" padding="4">
          2. The Resume
        </PageSubHeading>
        <PageSubHeading bg="red.300" padding="4">
          3. The Interview
        </PageSubHeading>
        <PageSubHeading
          bg="yellow.600"
          padding="4"
          borderRadius="0 0 var(--chakra-radii-md) var(--chakra-radii-md)"
        >
          4. The Job
        </PageSubHeading>
      </Box>
    </PageSetup>
  );
}

export default JobTips;
