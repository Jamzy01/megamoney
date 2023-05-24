import React from "react";
import PageSetup from "../../components/page/pageSetup";
import PageHeading from "../../components/pageHeading/pageHeading";
import PageSubHeading from "../../components/pageHeading/pageSubHeading";
import ResponsiveBodyText from "../../components/text/responsiveBodyText";
import { Box, Circle, Grid, GridItem, Text } from "@chakra-ui/react";

function DecisionMakingStep({ number, title, below, ...rest }) {
  return (
    <>
      <GridItem
        position="relative"
        display={{ base: "none", sm: "none", xl: "flex" }}
        flexDirection={below ? "column-reverse" : "column"}
        justifyContent="space-between"
        alignItems="center"
        paddingBottom={below ? 0 : "12"}
        paddingTop={below ? "12" : 0}
        gap="8"
        {...rest}
      >
        <Text
          bottom={0}
          left={0}
          right={0}
          fontSize="xl"
          textAlign="center"
          display="flex"
        >
          {title}
        </Text>
        <Circle
          size="16"
          bg="green.100"
          borderStyle="solid"
          borderColor="green.200"
          borderWidth="2px"
          shadow="2xl"
        >
          <Text fontSize="3xl" fontWeight="light">
            {number}
          </Text>
        </Circle>
      </GridItem>
      <Box
        display={{ base: "flex", sm: "flex", xl: "none" }}
        alignItems="center"
        gap="4"
      >
        <Circle
          size="16"
          bg="green.700"
          borderStyle="solid"
          borderColor="green.200"
          borderWidth="2px"
          shadow="2xl"
        >
          <Text fontSize="3xl" fontWeight="light">
            {number}
          </Text>
        </Circle>
        <Text
          bottom={0}
          left={0}
          right={0}
          fontSize="xl"
          textAlign="center"
          display="flex"
        >
          {title}
        </Text>
      </Box>
    </>
  );
}

function DecisionMaking() {
  return (
    <PageSetup>
      <PageHeading>Financial Decision Making</PageHeading>
      <ResponsiveBodyText>
        Making the tough financial decisions is not easy, but with a few simple
        tips you will find the best way to tackle every situation
      </ResponsiveBodyText>
      <Box marginTop="8" position="relative" display="flex" alignItems="center">
        <Box
          display={{ base: "none", sm: "none", xl: "initial" }}
          position="absolute"
          top={{ base: 0, sm: 0, xl: "50%" }}
          right={{ base: 0, sm: 0, xl: "" }}
          transform={{ base: "", sm: "", xl: "translate(0px, -50%)" }}
          width={{ base: "4", sm: "4", xl: "100%" }}
          height={{ base: "8xl", sm: "3xl", xl: "4" }}
          bg="gray.200"
          shadow="md"
          borderRadius="full"
        />
        <Grid
          gap="4"
          templateColumns={{ base: "", sm: "", xl: "repeat(5, 1fr)" }}
          templateRows={{ base: "", sm: "", xl: "repeat(2, 1fr)" }}
          padding={{ base: "4", sm: "4", md: 0 }}
        >
          <DecisionMakingStep
            colStart={1}
            rowStart={1}
            number="1"
            title="Identify the problem and it's priority"
          />
          <DecisionMakingStep
            colStart={2}
            rowStart={2}
            number="2"
            below={true}
            title="Do your research"
          />
          <DecisionMakingStep
            colStart={3}
            rowStart={1}
            number="3"
            title="Consider alternatives"
          />
          <DecisionMakingStep
            colStart={4}
            rowStart={2}
            below={true}
            number="4"
            title="Evalutate pros and cons"
          />
          <DecisionMakingStep
            colStart={5}
            rowStart={1}
            number="5"
            title="Discuss your decision with an advisor"
          />
        </Grid>
      </Box>
    </PageSetup>
  );
}

export default DecisionMaking;
