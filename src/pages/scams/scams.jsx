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
      <PageHeading>Watch out for scams</PageHeading>
      <ResponsiveBodyText>
        Scams are easy to fall for, especially on the web, luckily when you know
        what to look for, scams can be hilariously obvious
      </ResponsiveBodyText>
      <ResponsiveBodyText marginY="8">
        This email below is an example of a scam, click on the highlighted text
        to explain why this email is clearly malicious
      </ResponsiveBodyText>
      <Box
        display="flex"
        justifyContent="center"
        marginTop={{ base: 0, sm: 0, md: "4em" }}
      >
        <Box
          maxWidth="5xl"
          display="flex"
          gap="4"
          flexDirection="column"
          padding="6"
          bg="whiteAlpha.200"
          borderRadius="md"
          shadow="md"
        >
          <Box display="flex" gap="4" alignItems="center">
            <Box
              height="50px"
              aspectRatio={1}
              backgroundColor="white"
              shadow="md"
              bgImage={microsoftLogo}
              bgSize="60%"
              bgRepeat="no-repeat"
              bgPosition="center"
              borderRadius="9999px"
            />
            <Text
              fontSize={{
                base: "md",
                md: "lg",
              }}
            >
              Your Microsoft Account Needs Attention ​
              <InformationalText
                title="Angry Tone In Email"
                desc="Many scam emails will come with an angry or urgent tone, legitimate businesses would never send you an email like this"
              >
                URGENTLY
              </InformationalText>
            </Text>
          </Box>
          <Box>
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
          </Box>
          <Divider />
          <Box>
            <Text fontWeight="semibold">Dear Valued Customer</Text>
            <Text>
              Your{" "}
              <InformationalText
                title="Spelling and gramatical errors"
                desc="It is incredbly unlikely for a legitimate email to include obvious spelling and gramatical errors such as this one"
              >
                acount's
              </InformationalText>{" "}
              password has expired, please go to this link IMMEDIATELY to reset
              your password. If you do not reset your password, then you are at
              a high risk of being hacked.
            </Text>
            <Text>
              If you change your password within 3 days,{" "}
              <InformationalText
                title="Too good to be true offers"
                desc="Any unreasonable claims that seem too good to be true suggest that the email is most likely a scam"
              >
                you will get a bonus $100
              </InformationalText>
            </Text>
          </Box>
        </Box>
      </Box>
    </PageSetup>
  );
}

export default Scams;
