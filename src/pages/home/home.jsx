import {
  Box,
  Button,
  Divider,
  Image,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useColorModeValue,
  useSteps,
} from "@chakra-ui/react";
import React from "react";
import PageSetup from "../../components/page/pageSetup";
import PageHeading from "../../components/pageHeading/pageHeading";

import moneypot from "./assets/background/moneypot.jpg";
import computerpadlock from "./assets/topics/scams/computerpadlock.jpg";
import decisionmaking from "./assets/topics/decisionMaking/decisionMaking.jpg";
import engineer from "./assets/topics/jobTips/engineer.jpg";
import moneyfalling from "./assets/topics/desc/moneyfalling.jpg";

import "./home.css";
import PageSubHeading from "../../components/pageHeading/pageSubHeading";
import ResponsiveBodyText from "../../components/text/responsiveBodyText";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import ScrollAnimated from "../../components/scrollAnimated/scrollAnimated";

function GlassCard({ children, ...rest }) {
  return (
    <Box
      bg="blackAlpha.50"
      shadow="sm"
      backdropFilter={`blur(8px) contrast(20%) brightness(${useColorModeValue(
        167,
        30
      )}%)`}
      borderColor={useColorModeValue("whiteAlpha.300", "gray.900")}
      borderStyle="solid"
      borderWidth="2px"
      borderRadius="md"
      {...rest}
    >
      {children}
    </Box>
  );
}

function PageOverviewCard({ title, desc, page }) {
  return (
    <Box
      flex={1}
      bg="blackAlpha.50"
      borderRadius="md"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="3"
      padding="8"
    >
      <ResponsiveBodyText>{title}</ResponsiveBodyText>
      <Divider width="40%" height="2px" bg="blackAlpha.100" />
      <ResponsiveBodyText maxWidth="60%" textAlign="center">
        {desc}
      </ResponsiveBodyText>
      <Link to={page}>
        <Button variant="ghost">Read more</Button>
      </Link>
    </Box>
  );
}

const decisionMakingSteps = [
  {
    title: "Identify the problem",
    description: "Avoid stressing by identifying the problem and it's priority",
  },
  {
    title: "Brainstorm ideas",
    description: "Brainstorm every possible idea, no matter how crazy",
  },
  {
    title: "Do your research",
    description: "Take your time to do your research, ask questions",
  },
  {
    title: "Evaluate pros and cons",
    description:
      "Compile a list of pros and cons whilst considering your beliefs and values",
  },
  {
    title: "Talk to an advisor",
    description: "Talk to an advisor to seek out a professional's opinion",
  },
  {
    title: "Make the decision",
    description: "Make the decision, and avoid worrying",
  },
];

function Home() {
  return (
    <PageSetup position="relative">
      <Image
        opacity={useColorModeValue(0.7, 1)}
        width="100%"
        className="home-bg"
        position="absolute"
        src={moneypot}
        zIndex={-1}
        filter={`brightness(${useColorModeValue(100, 75)}%)`}
        left={0}
        right={0}
        top={0}
      />
      <Box
        right={0}
        display="flex"
        alignItems={{ base: "center", sm: "center", xl: "flex-end" }}
        flexDirection="column"
      >
        <PageHeading textAlign={{ base: "center", sm: "center", xl: "right" }}>
          Be in the know with money
        </PageHeading>
        <PageSubHeading
          textAlign={{ base: "center", sm: "center", xl: "right" }}
          fontWeight="400"
          maxWidth={{ base: null, sm: null, md: "70%", xl: "50%" }}
        >
          Stop yourself from letting money fall out of your pockets unknowingly
        </PageSubHeading>
      </Box>
      <ScrollAnimated>
        <GlassCard
          marginTop={{ base: "8", sm: "8", md: "16", xl: "64" }}
          padding="8"
          display="flex"
          flexDirection={{ base: "column", sm: "column", md: "row" }}
          gap="8"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ base: "center", sm: "center", md: "flex-start" }}
          >
            <PageSubHeading>
              Money skills are essential in a modern day of technology and
              raising costs of living
            </PageSubHeading>
            <ResponsiveBodyText marginTop="4">
              In a modern age of daily transactions, investment, precarious
              finances and technology lead to many people, especially younger
              people to unneccesarily stress over money issues. Skills such as
              being a smart consumer, setting proper achievable financial goals,
              structured decision making, appling to and working jobs with
              confidence and recognising scams will all help alleviate issues.
            </ResponsiveBodyText>
          </Box>
          <Image
            aspectRatio={{ base: 16 / 9, sm: 16 / 9, md: 6 / 5 }}
            flex={1}
            height="64"
            borderRadius="md"
            shadow="md"
            objectFit="cover"
            src={moneyfalling}
          />
        </GlassCard>
      </ScrollAnimated>
      <ScrollAnimated>
        <Box
          marginTop={{ base: "8", sm: "8", md: "16", xl: "64" }}
          padding="8"
          display="flex"
          flexDirection={{ base: "column", sm: "column", md: "row" }}
          gap="8"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems={{ base: "center", sm: "center", md: "flex-start" }}
          >
            <Box>
              <PageSubHeading>Watch out for scams</PageSubHeading>
              <ResponsiveBodyText marginTop="4">
                Scams are everywhere nowadays, and with one simple mistake you
                could lose thousands
              </ResponsiveBodyText>
              <ResponsiveBodyText marginBottom="4">
                Thankfully scams are often obvious to those who understand them,
                which is why it is crucial that you know how to recognise a scam
              </ResponsiveBodyText>
            </Box>
            <Link to="/scams">
              <Button variant="ghost">Read more</Button>
            </Link>
          </Box>
          <Image
            aspectRatio={{ base: 16 / 9, sm: 16 / 9, md: 6 / 5 }}
            flex={1}
            height="64"
            borderRadius="md"
            shadow="md"
            objectFit="cover"
            src={computerpadlock}
          />
        </Box>
      </ScrollAnimated>
      <ScrollAnimated>
        <Box marginTop="8" padding="8" width="100%">
          <PageSubHeading>Brush up on your money skills</PageSubHeading>
          <Box
            display="flex"
            marginTop="8"
            gap="6"
            flexDirection={{ base: "column", sm: "column", md: "row" }}
          >
            <PageOverviewCard
              title="Wise Consumers"
              desc="Learn what it means to be a wise consumer, and how to become one"
              page="/wiseconsumers"
            />
            <PageOverviewCard
              title="Financial Goals"
              desc="Financial goals are a key part of saving money and becoming money smart"
              page="/financialgoals"
            />
          </Box>
        </Box>
      </ScrollAnimated>
      <ScrollAnimated>
        <Box marginTop="16" padding="8">
          <PageSubHeading>Financial Decision Making</PageSubHeading>
          <ResponsiveBodyText marginTop="4">
            Financial decision making can be stressful for many, but with the
            right method you can attack any financial problem with confidence
          </ResponsiveBodyText>
          <Box
            display="flex"
            flexDirection={{ base: "column", sm: "column", lg: "row" }}
            justifyContent="space-between"
          >
            <Stepper
              index={
                useSteps({ index: 0, count: decisionMakingSteps.length })
                  .activeStep
              }
              size="lg"
              orientation="vertical"
              marginTop="8"
            >
              {decisionMakingSteps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box flexShrink="0">
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
            <Image
              src={decisionmaking}
              marginTop="8"
              objectFit="cover"
              width={{ base: null, sm: null, lg: "40%" }}
              height={{ base: "32", sm: "32", lg: "md" }}
              borderRadius="md"
              shadow="md"
            />
          </Box>
          <Link to="/decisionmaking">
            <Button marginTop="4" variant="ghost">
              Read more
            </Button>
          </Link>
        </Box>
      </ScrollAnimated>
      <ScrollAnimated>
        <Box marginTop="16" padding="8">
          <PageSubHeading textAlign="right">Job Tips</PageSubHeading>
          <Box display="flex" marginTop="4" gap="32">
            <Image
              display={{ base: "none", lg: "initial" }}
              width="60%"
              height="32"
              objectFit="cover"
              borderRadius="md"
              shadow="md"
              src={engineer}
            />
            <Box textAlign={{ base: "center", md: "right" }}>
              <ResponsiveBodyText flex={1} textAlign="right">
                Interviews, selecting a job, resumes and everything related do a
                job is difficult. Your first job especially is hard, but with
                some care you could have a cushy job in only a few years
              </ResponsiveBodyText>
              <Link to="/jobtips">
                <Button variant="ghost" marginTop="3">
                  Read more
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </ScrollAnimated>
    </PageSetup>
  );
}

export default Home;
