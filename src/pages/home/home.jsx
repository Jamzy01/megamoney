import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import PageSetup from "../../components/page/pageSetup";
import PageHeading from "../../components/pageHeading/pageHeading";

import moneypot from "./assets/background/moneypot.jpg";
import computerpadlock from "./assets/topics/scams/computerpadlock.jpg";
import "./home.css";
import PageSubHeading from "../../components/pageHeading/pageSubHeading";
import ResponsiveBodyText from "../../components/text/responsiveBodyText";

function Home() {
  return (
    <PageSetup position="relative">
      <Image
        className="home-bg"
        position="absolute"
        src={moneypot}
        zIndex={-1}
        filter="brightness(100%)"
        left={0}
        right={0}
        top={0}
      />
      <Box
        right={0}
        display="flex"
        alignItems="flex-end"
        flexDirection="column"
      >
        <PageHeading textAlign="right">Be in the know with money</PageHeading>
        <PageSubHeading textAlign="right" fontWeight="400" maxWidth="50%">
          Stop yourself from letting money fall out of your pockets unknowingly
        </PageSubHeading>
      </Box>
      <Box
        marginTop="64"
        bg="blackAlpha.50"
        shadow="sm"
        backdropFilter="blur(12px)"
        borderColor="gray.800"
        borderStyle="solid"
        borderWidth="2px"
        borderRadius="md"
        padding="8"
        display="flex"
        flexDirection="row"
        gap="8"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="start"
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
          <Button>Read more</Button>
        </Box>
        <Image
          width="50%"
          height="48"
          borderRadius="md"
          objectFit="cover"
          src={computerpadlock}
        />
      </Box>
    </PageSetup>
  );
}

export default Home;
