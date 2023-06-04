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

const rootPath = "/";

const PAGES = [
  {
    default: true,
    location: "/home",
    title: "Home",
  },
  {
    location: "/scams",
    title: "Scams",
  },
  {
    location: "/wiseconsumers",
    title: "Wise Consumers",
  },
  {
    location: "/financialgoals",
    title: "Financial Goals",
  },
  {
    location: "/decisionmaking",
    title: "Decision Making",
  },
  {
    location: "/jobtips",
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
      zIndex={1000}
      display="flex"
      justifyContent="space-between"
      paddingX="4"
      alignItems="center"
      height="16"
      bg={useColorModeValue(
        "gray.50",
        "linear-gradient(0deg, var(--chakra-colors-gray-800), var(--chakra-colors-gray-900))"
      )}
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
          bg={useColorModeValue("white", "gray.800")}
          borderRadius="md"
          overflow="clip"
          display={{ base: "none", md: "none", lg: "none", xl: "initial" }}
          index={PAGES.findIndex(
            (page) =>
              page.location === location.pathname ||
              (page.default && location.pathname === rootPath)
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
