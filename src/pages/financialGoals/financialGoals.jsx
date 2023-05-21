import React, { useRef } from "react";
import PageSetup from "../../components/page/pageSetup";
import PageHeading from "../../components/pageHeading/pageHeading";
import {
  Box,
  HStack,
  ListItem,
  OrderedList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import "./financialGoals.css";
import { FiList } from "react-icons/fi";
import PageSubHeading from "../../components/pageHeading/pageSubHeading";

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
      <PageSubHeading>
        What should your financial goals look like?{" "}
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
            <ListItem id="goal-tip-desc-specific" ref={specificTipDescRef}>
              Make it specific
              <Text fontSize="md">
                Make your goal specific otherwise it's not a goal, it's only an
                idea instead set a goal like "only buy takeaway once a week"
                instead of "save money"
              </Text>
            </ListItem>
            <ListItem id="goal-tip-desc-measurable" ref={measurableTipDescRef}>
              Make it measurable
              <Text fontSize="md">
                Any goal should be measurable so that you can see the progress
                you have made, stay motivated to the task and stick to your
                deadline
              </Text>
            </ListItem>
            <ListItem id="goal-tip-desc-deadline" ref={deadlineTipDescRef}>
              Make a deadline
              <Text fontSize="md">
                Putting a deadline on your goal will keep you on track and will
                push you to follow through with your goal insteading of
                abandoning it
              </Text>
            </ListItem>
            <ListItem id="goal-tip-desc-realistic" ref={realisticTipDescRef}>
              Check that your goal is realistic
              <Text fontSize="md">
                Make sure that your goal is realistic and achievable, or you
                will find yourself setting many pointless goals that never see
                the light of day
              </Text>
            </ListItem>
            <ListItem id="goal-tip-desc-deadline" ref={writeTipDescRef}>
              Write down the goal
              <Text fontSize="md">
                Write your goal down to help remind you of your task and if
                possible, tell a friend about your goal which will motivate you
                and encourage you to not give up
              </Text>
            </ListItem>
          </OrderedList>
        </Box>
      </Box>
      <PageSubHeading marginTop="4">Making a budget</PageSubHeading>
    </PageSetup>
  );
}

export default FinancialGoals;
