import React from "react";
import PageSetup from "../../components/page/pageSetup";
import { Box, Divider, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import PageHeading from "../../components/pageHeading/pageHeading";
import ResponsiveBodyText from "../../components/text/responsiveBodyText";

import microsoftLogo from "./assets/email/microsoft_logo.svg";
import InformationalText from "../../components/text/informationalText";

function Scams() {
  return (
    <PageSetup>
      <PageHeading title="Watch out for scams" />
      <ResponsiveBodyText>
        Scams are easy to fall for, especially on the web, luckily when you know
        what to look for, scams can be hilariously obvious
      </ResponsiveBodyText>
      <ResponsiveBodyText marginY="8">
        This email below is an example of a scam, click on the highlighted text
        to explain why this email is obviously malicious
      </ResponsiveBodyText>
      <Box
        height="300px"
        padding="6"
        bg="whiteAlpha.200"
        borderRadius="md"
        shadow="md"
      >
        <Grid
          templateRows="var(--chakra-space-8) 1fr 2fr"
          templateColumns="var(--chakra-space-16) 1fr"
          gap="4"
          height="100%"
        >
          <GridItem colStart={2}>
            <Text fontSize="xl">
              Your Microsoft Account Needs Attention URGENTLY
            </Text>
          </GridItem>
          <GridItem>
            <Box
              height="100%"
              aspectRatio={1}
              backgroundColor="white"
              shadow="md"
              bgImage={microsoftLogo}
              bgSize="60%"
              bgRepeat="no-repeat"
              bgPosition="center"
              borderRadius="9999px"
            />
          </GridItem>
          <GridItem
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Text fontSize="lg">Microsoft Account Team</Text>
            <Text display="flex">
              microsoftsupport@
              <InformationalText
                title="Dodgy domain names"
                desc="Often publicly used domains such as Gmail, Hotmail, Yahoo and Outlook aren't official. Legitimate business emails will be sent from an email address with their own domain such as microsoft.com or google.com"
              >
                gmail.com
              </InformationalText>
            </Text>
          </GridItem>
          <GridItem colStart={2}>
            <Text fontWeight="semibold">Dear Valued Customer</Text>
          </GridItem>
        </Grid>
      </Box>
    </PageSetup>
  );
}

export default Scams;
