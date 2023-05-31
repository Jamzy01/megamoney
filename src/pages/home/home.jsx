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
        opacity={useColorModeValue(0.7, 1)}
        width="100%"
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
      <Box
        marginTop={{ base: "8", sm: "8", md: "16", xl: "64" }}
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
          <Button>Read more</Button>
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
    </PageSetup>
  );
}

export default Home;
