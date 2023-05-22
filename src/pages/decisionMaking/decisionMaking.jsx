import React from "react";
import PageSetup from "../../components/page/pageSetup";
import PageHeading from "../../components/pageHeading/pageHeading";
import PageSubHeading from "../../components/pageHeading/pageSubHeading";
import ResponsiveBodyText from "../../components/text/responsiveBodyText";
import { Box, Circle, Grid, GridItem, Text } from "@chakra-ui/react";

function DecisionMakingStep({ number, title, below }) {
  return (
    <GridItem
      position="relative"
      display="flex"
      flexDirection={{
        base: "row-reverse",
        sm: "row-reverse",
        xl: below ? "column-reverse" : "column",
      }}
      justifyContent={{ base: "start", sm: "start", xl: "space-between" }}
      alignItems="center"
      paddingBottom={{ base: 0, sm: 0, xl: below ? 0 : "12" }}
      paddingTop={{ base: 0, sm: 0, xl: below ? "12" : 0 }}
      paddingRight={{ base: "8", sm: "8", xl: 0 }}
      gap="8"
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
          display={{ base: "none", sm: "none", md: "initial" }}
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
          templateColumns={{ base: "", sm: "", xl: "repeat(4, 1fr)" }}
          templateRows={{ base: "", sm: "", xl: "repeat(2, 1fr)" }}
          padding={{ base: "4", sm: "4", md: 0 }}
        >
          <DecisionMakingStep
            number="1"
            title="Identify the problem and it's priority"
          />
          <DecisionMakingStep number="2" title="Avoid panicking" />
          <DecisionMakingStep number="3" title="Do your research" />
          <DecisionMakingStep number="4" title="Talk to an advisor" />
          <DecisionMakingStep
            below={true}
            number="1"
            title="Identify the problem and it's priority"
          />
          <DecisionMakingStep below={true} number="2" title="Avoid panicking" />
          <DecisionMakingStep
            below={true}
            number="3"
            title="Do your research"
          />
          <DecisionMakingStep
            below={true}
            number="4"
            title="Talk to an advisor"
          />
        </Grid>
      </Box>
    </PageSetup>
  );
}

export default DecisionMaking;
