import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import PageSetup from "../../components/page/pageSetup";
import PageHeading from "../../components/pageHeading/pageHeading";

function Home() {
  return (
    <PageSetup>
      <PageHeading title="Be in the know with money" />
    </PageSetup>
  );
}

export default Home;
