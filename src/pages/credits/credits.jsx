import React from "react";
import PageSetup from "../../components/page/pageSetup";
import PageHeading from "../../components/pageHeading/pageHeading";
import PageSubHeading from "../../components/pageHeading/pageSubHeading";
import ResponsiveBodyText from "../../components/text/responsiveBodyText";
import { Box } from "@chakra-ui/react";

function Credits() {
  return (
    <PageSetup>
      <PageHeading>Credits</PageHeading>
      <Box display="flex" flexDirection="column" gap="4">
        <Box>
          <PageSubHeading>Website made by James Gaunt</PageSubHeading>
          <ResponsiveBodyText marginTop="4">
            Thanks to Max Turner and Isaac for providing feedback on the website
          </ResponsiveBodyText>
        </Box>
        <Box>
          <PageSubHeading>Framework and UI Library</PageSubHeading>
          <ResponsiveBodyText marginTop="4">
            React JS + Chakra UI
          </ResponsiveBodyText>
        </Box>
        <Box>
          <PageSubHeading>Images</PageSubHeading>
          <ResponsiveBodyText marginTop="4">
            Pixabay + Unsplash
          </ResponsiveBodyText>
        </Box>
      </Box>
    </PageSetup>
  );
}

export default Credits;
