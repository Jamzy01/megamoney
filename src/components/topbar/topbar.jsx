import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  Tabs,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { FiDollarSign, FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

const PAGES = [
  {
    default: true,
    location: "/megamoney/home",
    title: "Home",
  },
  {
    location: "/megamoney/scams",
    title: "Scams",
  },
  {
    location: "/megamoney/wiseconsumers",
    title: "Wise Consumers",
  },
  {
    location: "/megamoney/financialgoals",
    title: "Financial Goals",
  },
  {
    location: "/megamoney/decisionmaking",
    title: "Decision Making",
  },
  {
    location: "/megamoney/jobtips",
    title: "Job Tips",
  },
];

function Topbar() {
  const location = useLocation();

  const navigate = useNavigate();

  const { toggleColorMode } = useColorMode();

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={9999}
      display="flex"
      justifyContent="space-between"
      paddingX="4"
      alignItems="center"
      height="16"
      bgColor={useColorModeValue("white", "gray.900")}
      shadow="sm"
    >
      <Text
        fontSize="xl"
        userSelect="none"
        display="flex"
        alignItems="center"
        gap="2"
      >
        <FiDollarSign size="1em" />
        Mega Money
      </Text>
      <Box display="flex" gap="4">
        <IconButton
          icon={useColorModeValue(<FiSun />, <FiMoon />)}
          aria-label={useColorModeValue(
            "toggle to dark theme",
            "toggle to light theme"
          )}
          onClick={toggleColorMode}
        />

        <Tabs
          display={{ base: "none", md: "none", lg: "none", xl: "initial" }}
          index={PAGES.findIndex(
            (page) =>
              page.location === location.pathname ||
              (page.default && location.pathname === "/")
          )}
        >
          <TabList>
            {PAGES.map((page) => (
              <Tab
                userSelect="none"
                key={page.location}
                whiteSpace="nowrap"
                onClick={() => {
                  navigate(page.location);
                }}
              >
                {page.title}
              </Tab>
            ))}
          </TabList>
        </Tabs>
        <Menu>
          <MenuButton
            aria-label="page menu"
            display={{ base: "flex", md: "flex", lg: "flex", xl: "none" }}
            as={IconButton}
            icon={<FiMenu />}
          />
          <MenuList>
            {PAGES.map((page) => (
              <MenuItem
                key={page.location}
                onClick={() => {
                  navigate(page.location);
                }}
              >
                {page.title}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}

export default Topbar;
