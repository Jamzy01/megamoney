import React from "react";
import PageSetup from "../../components/page/pageSetup";
import PageHeading from "../../components/pageHeading/pageHeading";
import PageSubHeading from "../../components/pageHeading/pageSubHeading";
import ResponsiveBodyText from "../../components/text/responsiveBodyText";
import {
  Box,
  Circle,
  Grid,
  GridItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ScrollAnimated from "../../components/scrollAnimated/scrollAnimated";
import SequencedScrollAnimated from "../../components/scrollAnimated/sequencedScrollAnimated";

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
          fontSize="lg"
          textAlign="center"
          display="flex"
        >
          {title}
        </Text>
        <Circle
          size="16"
          bg={useColorModeValue("blue.50", "blue.700")}
          borderStyle="solid"
          borderColor={useColorModeValue("blue.100", "blue.800")}
          borderWidth="2px"
          shadow="sm"
        >
          <Text fontSize="3xl" fontWeight="light">
            {number}
          </Text>
        </Circle>
        <Box
          position="absolute"
          zIndex={-1}
          bottom={below ? null : 0}
          top={below ? 0 : null}
          bg={useColorModeValue("blackAlpha.100", "gray.700")}
          width="4"
          height="calc(var(--chakra-sizes-12) + var(--chakra-sizes-16) / 2)"
        />
      </GridItem>
      <Box
        display={{ base: "flex", sm: "flex", xl: "none" }}
        alignItems="center"
        gap="4"
      >
        <Circle
          size="12"
          bg={useColorModeValue("blue.50", "blue.700")}
          borderStyle="solid"
          borderColor={useColorModeValue("blue.100", "blue.800")}
          borderWidth="2px"
          shadow="sm"
        >
          <Text fontSize="2xl" fontWeight="light">
            {number}
          </Text>
        </Circle>
        <Text
          bottom={0}
          left={0}
          right={0}
          fontSize={{ base: "md", sm: "md", md: "lg", lg: "xl" }}
          textAlign="center"
          display="flex"
        >
          {title}
        </Text>
      </Box>
    </>
  );
}

function DecisionMakingStepDesc({ title, desc }) {
  return (
    <GridItem
      bg={useColorModeValue("white", "blackAlpha.200")}
      borderRadius="md"
      shadow={{ base: "md", sm: "md", lg: "md" }}
      padding="6"
      display="flex"
      flexDirection="column"
      height="100%"
    >
      <Text
        fontWeight="500"
        fontSize={{ base: "md", sm: "md", md: "lg", lg: "xl" }}
      >
        {title}
      </Text>
      <Text
        fontWeight="400"
        fontSize={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
      >
        {desc}
      </Text>
    </GridItem>
  );
}

function DecisionMaking() {
  return (
    <PageSetup>
      <PageHeading>Financial Decision Making</PageHeading>
      <ScrollAnimated>
        <ResponsiveBodyText marginTop="8" marginBottom="16">
          Making the tough financial decisions is not easy, but with a few
          simple tips you will find the best way to tackle every situation
        </ResponsiveBodyText>
      </ScrollAnimated>
      <ScrollAnimated>
        <Box
          marginTop="8"
          position="relative"
          display="flex"
          alignItems="center"
          paddingX={{ base: 0, sm: 0, xl: "4" }}
        >
          <Box
            display={{ base: "none", sm: "none", xl: "initial" }}
            position="absolute"
            top={{ base: 0, sm: 0, xl: "50%" }}
            right={{ base: 0, sm: 0, xl: "" }}
            transform={{ base: "", sm: "", xl: "translate(0px, -50%)" }}
            width={{ base: "4", sm: "4", xl: "100%" }}
            height={{ base: "8xl", sm: "3xl", xl: "4" }}
            bg={useColorModeValue("blackAlpha.50", "gray.700")}
            shadow={useColorModeValue(null, "md")}
            borderRadius="full"
          />
          <Grid
            width="100%"
            gap="4"
            templateColumns={{ base: "", sm: "", xl: "repeat(6, 1fr)" }}
            templateRows={{ base: "", sm: "", xl: "repeat(2, 1fr)" }}
          >
            <DecisionMakingStep
              colStart={1}
              rowStart={1}
              number="1"
              title="Identify the problem"
            />
            <DecisionMakingStep
              colStart={2}
              rowStart={2}
              number="2"
              below={true}
              title="Brainstorm ideas"
            />
            <DecisionMakingStep
              colStart={3}
              rowStart={1}
              number="3"
              title="Do your research"
            />
            <DecisionMakingStep
              colStart={4}
              rowStart={2}
              below={true}
              number="4"
              title="Evaluate pros and cons"
            />
            <DecisionMakingStep
              colStart={5}
              rowStart={1}
              number="5"
              title="Talk to an advisor"
            />
            <DecisionMakingStep
              colStart={6}
              rowStart={2}
              number="6"
              below={true}
              title="Make the decision"
            />
          </Grid>
        </Box>
      </ScrollAnimated>
      <Grid
        marginTop="16"
        gap="8"
        templateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
      >
        <SequencedScrollAnimated>
          <DecisionMakingStepDesc
            title="Identify the problem"
            desc={
              <Text>
                Identifying your problem will help you place it on a level of
                importance, if it isn't urgent then it will help you realise you
                have plenty of time and there is no need to worry
              </Text>
            }
          />
          <DecisionMakingStepDesc
            title="Brainstorm ideas"
            desc={
              <Text>
                Brainstorm all ideas no matter how ridiculous they may seem,
                maybe even with a friend, it will help you realise what all of
                your options are
              </Text>
            }
          />
          <DecisionMakingStepDesc
            title="Do your research and consider alternatives"
            desc={
              <Text>
                Do your research, consider alternatives to make an educated
                guess on the result of all of your options
              </Text>
            }
          />
          <DecisionMakingStepDesc
            title="Evaluate pros and cons"
            desc={
              <Text>
                From the information gathered in your research, compile a list
                of pros and cons to determine what might be the best plan of
                action
              </Text>
            }
          />
          <DecisionMakingStepDesc
            title="Discuss it with an advisor"
            desc={
              <Text>
                After doing your research and evaluating pros and cons, a
                financial advisor could give you an expert opinion and
                suggestions
              </Text>
            }
          />
          <DecisionMakingStepDesc
            title="Make the decision"
            desc={
              <Text>
                Weigh up your options whilst consider long term effects and your
                values, if possible try to choose an option that doesn't leave
                you locked in your decision so you can reconsider at any point
              </Text>
            }
          />
        </SequencedScrollAnimated>
      </Grid>
    </PageSetup>
  );
}

export default DecisionMaking;
