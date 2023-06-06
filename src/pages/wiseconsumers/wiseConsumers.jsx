import React from "react";
import PageSetup from "../../components/page/pageSetup";
import PageHeading from "../../components/pageHeading/pageHeading";
import ResponsiveBodyText from "../../components/text/responsiveBodyText";
import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import InformationalCard from "../../components/card/informationalCard";

import card from "./assets/tips/debitcards/card.jpg";
import budget from "./assets/tips/budgetting/budget.jpg";
import specialitems from "./assets/tips/specialitems/specialitems.jpg";
import homecooking from "./assets/tips/homecooking/homecooking.jpg";
import priorresearch from "./assets/tips/priorresearch/priorresearch.jpg";
import impulseshopping from "./assets/tips/impulseshopping/impulseshopping.jpg";
import convenienceshopping from "./assets/tips/convenienceshopping/convenienceshopping.jpg";
import PageSubHeading from "../../components/pageHeading/pageSubHeading";
import ScrollAnimated from "../../components/scrollAnimated/scrollAnimated";
import SequencedScrollAnimated from "../../components/scrollAnimated/sequencedScrollAnimated";

function WiseConsumers() {
  return (
    <PageSetup>
      <PageHeading>Wise Consumers </PageHeading>
      <PageSubHeading>How can I be a wise consumer?</PageSubHeading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          "2xl": "repeat(4, 1fr)",
        }}
        marginY="8"
        gap="8"
      >
        <SequencedScrollAnimated>
          <InformationalCard
            title="Use a debit card"
            image={card}
            desc="Debit cards will help you be conscientious before buying and will stop you from overspending"
          />
          <InformationalCard
            title="Write a monthly budget"
            image={budget}
            desc="A monthly budget will help you manage where your monthly earnings are going, and allows you to save money up that could be used in emergency situations"
          />
          <InformationalCard
            title="Buy long lasting items on special"
            image={specialitems}
            desc="Buying items that last a long time in large quantities when they're on special can save a lot of money"
          />
          <InformationalCard
            title="Cook homemade meals"
            image={homecooking}
            desc="Cooking your own dinner and packing lunch for work or school can save a lot of money and is a healthier alternative"
          />
          <InformationalCard
            title="Do your research"
            image={priorresearch}
            desc="Always do your research and check online reviews before buyings items that are expensive or that you expect to have for a long time, aswell as checking return and exchange policies"
          />
          <InformationalCard
            title="Don't spend on impulse"
            image={impulseshopping}
            desc="Spending money on impulse is a bad idea as you haven't planned to buy that item, meaning you are likely to deviate from your budget and you also will have done no research on the item being purchased"
          />
          <InformationalCard
            title="Try to avoid buying for convenience"
            image={convenienceshopping}
            desc="Whilst being tempting, buying things out of convenince such as takeaway are likely to be much more expensive where better alternatives exist"
          />
        </SequencedScrollAnimated>
      </Grid>
      <ScrollAnimated>
        <PageSubHeading marginBottom="8">
          Should I use a credit card?
        </PageSubHeading>
        <Box
          display="flex"
          gap="8"
          flexDirection={{ base: "column", sm: "column", lg: "row" }}
        >
          <Box flex={1}>
            <Text textAlign="center" fontSize="2xl">
              Advantages
            </Text>
            <Divider />
            <List spacing="4" padding="4" fontSize="xl">
              <SequencedScrollAnimated>
                <ListItem>
                  Easy access to money
                  <Text fontSize="md">
                    With a credit card you have easy access to credit even when
                    you don't have the needed money, this could be considered a
                    con if misused
                  </Text>
                </ListItem>
                <ListItem>
                  Build a credit score
                  <Text fontSize="md">
                    With a credit card you can build a credit history which
                    shows your ability to pay your bills off quickly
                  </Text>
                </ListItem>
                <ListItem>
                  Loss or theft protection
                  <Text fontSize="md">
                    As long as the owner reports their credit card as lost or
                    stolen quickly, they are often only expected to pay a minor
                    fine instead of the full amount lost
                  </Text>
                </ListItem>
              </SequencedScrollAnimated>
            </List>
          </Box>
          <Box flex={1}>
            <Text textAlign="center" fontSize="2xl">
              Disadvantages
            </Text>
            <Divider />
            <List spacing="4" padding="4" fontSize="xl">
              <SequencedScrollAnimated>
                <ListItem>
                  Easy to lose track of spending
                  <Box display="flex" flexDirection="column" gap="2">
                    <Text fontSize="md">
                      With a seemingly unlimited amount of money at your
                      fingertips, many people will overspend and end up in debt
                      using credit cards
                    </Text>
                    <Text fontSize="md">
                      Debit cards although have a hard limit, and you can't
                      spend more than you own
                    </Text>
                  </Box>
                </ListItem>
                <ListItem>
                  High interest rates
                  <Text fontSize="md">
                    If a credit card bill is not paid quickly, then the credit
                    card interest rates will very quickly increase the amount
                    owed
                  </Text>
                </ListItem>
                <ListItem>
                  Extra costs
                  <Text fontSize="md">
                    With a credit card there exists many less obvious costs such
                    as minimum due fees, annual ownership fees, foreign
                    transaction fees, exceeding limit fees and credit card
                    surcharges
                  </Text>
                </ListItem>
              </SequencedScrollAnimated>
            </List>
          </Box>
        </Box>
      </ScrollAnimated>
    </PageSetup>
  );
}

export default WiseConsumers;
