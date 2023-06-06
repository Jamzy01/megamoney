import React, { useRef } from "react";
import PageSetup from "../../components/page/pageSetup";
import PageHeading from "../../components/pageHeading/pageHeading";
import {
  Box,
  HStack,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import "./financialGoals.css";
import { FiList } from "react-icons/fi";
import PageSubHeading from "../../components/pageHeading/pageSubHeading";
import ResponsiveBodyText from "../../components/text/responsiveBodyText";
import ScrollAnimated from "../../components/scrollAnimated/scrollAnimated";

function FinancialGoal({
  title,
  color,
  descElement,
  resetTipDescription,
  resetAllTipDescriptions,
  hideAllTipDescriptions,
  ...rest
}) {
  return (
    <Box
      position="absolute"
      borderRadius="2xl"
      bg={`${color}.${useColorModeValue(200, 800)}`}
      shadow="sm"
      width="32"
      aspectRatio={1}
      display="flex"
      justifyContent="center"
      onMouseEnter={() => {
        // Run after mouse leave events to avoid conflict
        setTimeout(() => {
          hideAllTipDescriptions();
          resetTipDescription(descElement);
        }, 0);
      }}
      onMouseLeave={resetAllTipDescriptions}
      {...rest}
    >
      <Text
        maxWidth="70%"
        aspectRatio={1}
        display="flex"
        alignItems="center"
        textAlign="center"
        fontSize="md"
      >
        {title}
      </Text>
    </Box>
  );
}

function FinancialGoals() {
  const specificTipDescRef = useRef();
  const measurableTipDescRef = useRef();
  const deadlineTipDescRef = useRef();
  const realisticTipDescRef = useRef();
  const writeTipDescRef = useRef();

  function resetTipDescription(tipDescription) {
    tipDescription.current.classList.toggle("tip-desc-dim", false);
  }

  function hideTipDescription(tipDescription) {
    tipDescription.current.classList.toggle("tip-desc-dim", true);
  }

  function hideAllTipDescriptions() {
    hideTipDescription(specificTipDescRef);
    hideTipDescription(measurableTipDescRef);
    hideTipDescription(deadlineTipDescRef);
    hideTipDescription(realisticTipDescRef);
    hideTipDescription(writeTipDescRef);
  }

  function resetAllTipDescriptions() {
    resetTipDescription(specificTipDescRef);
    resetTipDescription(measurableTipDescRef);
    resetTipDescription(deadlineTipDescRef);
    resetTipDescription(realisticTipDescRef);
    resetTipDescription(writeTipDescRef);
  }

  return (
    <PageSetup>
      <PageHeading>Financial Goals</PageHeading>
      <PageSubHeading marginBottom="8">
        What should your financial goals look like?
      </PageSubHeading>
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "column", xl: "row" }}
        gap="16"
      >
        <Box
          flex={1}
          aspectRatio={1}
          position="relative"
          display={{ base: "none", sm: "none", md: "flex" }}
          justifyContent="center"
          alignItems="center"
        >
          <Box position="absolute" className="goal-steps">
            <FinancialGoal
              descElement={specificTipDescRef}
              resetTipDescription={resetTipDescription}
              resetAllTipDescriptions={resetAllTipDescriptions}
              hideAllTipDescriptions={hideAllTipDescriptions}
              title="Make it specific"
              color="cyan"
            />
            <FinancialGoal
              descElement={measurableTipDescRef}
              resetTipDescription={resetTipDescription}
              resetAllTipDescriptions={resetAllTipDescriptions}
              hideAllTipDescriptions={hideAllTipDescriptions}
              id="goal-tip-thumb-measurable"
              title="Make it measurable"
              color="purple"
            />
            <FinancialGoal
              descElement={deadlineTipDescRef}
              resetTipDescription={resetTipDescription}
              resetAllTipDescriptions={resetAllTipDescriptions}
              hideAllTipDescriptions={hideAllTipDescriptions}
              id="goal-tip-thumb-deadline"
              title="Set a deadline"
              color="blue"
            />
            <FinancialGoal
              descElement={realisticTipDescRef}
              resetTipDescription={resetTipDescription}
              resetAllTipDescriptions={resetAllTipDescriptions}
              hideAllTipDescriptions={hideAllTipDescriptions}
              id="goal-tip-thumb-realistic"
              title="Make it realistic"
              color="teal"
            />
            <FinancialGoal
              descElement={writeTipDescRef}
              resetTipDescription={resetTipDescription}
              resetAllTipDescriptions={resetAllTipDescriptions}
              hideAllTipDescriptions={hideAllTipDescriptions}
              id="goal-tip-thumb-write"
              title="Write it down"
              color="green"
            />
          </Box>
        </Box>
        <Box flex={1}>
          <OrderedList className="goal-steps-desc" fontSize="lg">
            <ScrollAnimated transition={{ delay: 0 }}>
              <ListItem id="goal-tip-desc-specific" ref={specificTipDescRef}>
                Make it specific
                <Text fontSize={{ base: "sm", sm: "md", md: "md" }}>
                  Make your goal specific otherwise it's not a goal, it's only
                  an idea instead set a goal like "only buy takeaway once a
                  week" instead of "save money"
                </Text>
              </ListItem>
            </ScrollAnimated>
            <ScrollAnimated transition={{ delay: 0.02 }}>
              <ListItem
                id="goal-tip-desc-measurable"
                ref={measurableTipDescRef}
              >
                Make it measurable
                <Text fontSize={{ base: "sm", sm: "md", md: "md" }}>
                  Any goal should be measurable so that you can see the progress
                  you have made, stay motivated to the task and stick to your
                  deadline
                </Text>
              </ListItem>
            </ScrollAnimated>
            <ScrollAnimated transition={{ delay: 0.02 }}>
              <ListItem id="goal-tip-desc-deadline" ref={deadlineTipDescRef}>
                Make a deadline
                <Text fontSize={{ base: "sm", sm: "md", md: "md" }}>
                  Putting a deadline on your goal will keep you on track and
                  will push you to follow through with your goal insteading of
                  abandoning it
                </Text>
              </ListItem>
            </ScrollAnimated>
            <ScrollAnimated transition={{ delay: 0.04 }}>
              <ListItem id="goal-tip-desc-realistic" ref={realisticTipDescRef}>
                Check that your goal is realistic
                <Text fontSize={{ base: "sm", sm: "md", md: "md" }}>
                  Make sure that your goal is realistic and achievable, or you
                  will find yourself setting many pointless goals that never see
                  the light of day
                </Text>
              </ListItem>
            </ScrollAnimated>
            <ScrollAnimated transition={{ delay: 0.06 }}>
              <ListItem id="goal-tip-desc-deadline" ref={writeTipDescRef}>
                Write down the goal
                <Text fontSize={{ base: "sm", sm: "md", md: "md" }}>
                  Write your goal down to help remind you of your task and if
                  possible, tell a friend about your goal which will motivate
                  you and encourage you to not give up
                </Text>
              </ListItem>
            </ScrollAnimated>
          </OrderedList>
        </Box>
      </Box>
      <PageSubHeading marginTop="4" marginBottom="8">
        Making a budget
      </PageSubHeading>
      <Box
        fontSize="3xl"
        className="budget-steps"
        display="flex"
        flexDirection="column"
        gap="4"
        textAlign="center"
      >
        <ScrollAnimated transition={{ delay: 0 }}>
          <Heading fontSize={{ base: "xl", sm: "2xl", md: "2xl" }}>
            1. Record your income
            <Text fontSize={{ base: "sm", sm: "md", md: "md" }}>
              Evaluate how much money you make, and how often, you can estimate
              this from wages, a pension, benefits, payments and investment
              payoffs
            </Text>
          </Heading>
        </ScrollAnimated>
        <ScrollAnimated transition={{ delay: 0.02 }}>
          <Heading fontSize={{ base: "xl", sm: "2xl", md: "2xl" }}>
            2. Record your expenses
            <Text fontSize={{ base: "sm", sm: "md", md: "md" }}>
              Estimate your expenses each income cycle, from fixed expenses such
              as bills, debts and costs of living, from debt expenses such as
              morgtages, credit cards and loans, and from unexpected expenses
              such as house or car repairs, medical bills and vet bills.
            </Text>
          </Heading>
        </ScrollAnimated>
        <ScrollAnimated transition={{ delay: 0.04 }}>
          <Heading fontSize={{ base: "xl", sm: "2xl", md: "2xl" }}>
            4. Allocate the money
            <Text fontSize={{ base: "sm", sm: "md", md: "md" }}>
              Allocate your income to these area of expenses, allocating them in
              order of neccesity
              <UnorderedList marginY="2">
                <ListItem>Fixed Expenses</ListItem>
                <ListItem>Debt Expenses</ListItem>
                <ListItem>Unexpected Expenses</ListItem>
              </UnorderedList>
              This should give you a fair idea of how much money you spend, and
              what your allowance should be for other spending
            </Text>
          </Heading>
        </ScrollAnimated>
        <ScrollAnimated transition={{ delay: 0.06 }}>
          <Heading fontSize={{ base: "xl", sm: "2xl", md: "2xl" }}>
            3. What's left over
            <Text fontSize={{ base: "sm", sm: "md", md: "md" }}>
              If there is money left over (which there should be), then you can
              allocate that towards spending money and savings. Spending money
              should be used for entertainment, shopping, eating out and
              leisure. Saving money should be used for investments, emergency
              money, retirement, debt repayments or other savings.
              <Text fontWeight="bold" as="span">
                {" "}
                Be sure to stick to your budget, and make sure you aren't
                spending past your income
              </Text>
            </Text>
          </Heading>
        </ScrollAnimated>
        <ScrollAnimated transition={{ delay: 0.08 }}>
          <Heading fontSize={{ base: "xl", sm: "2xl", md: "2xl" }}>
            5. Adjust the budget
            <Text fontSize={{ base: "sm", sm: "md", md: "md" }}>
              If something isn't working out great in your budget, adjust it
              accordingly. Your budget is never final and is only a guide for
              your spending.
            </Text>
          </Heading>
        </ScrollAnimated>
      </Box>
    </PageSetup>
  );
}

export default FinancialGoals;
