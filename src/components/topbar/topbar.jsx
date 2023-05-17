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
} from "@chakra-ui/react";
import React from "react";
import { FiDollarSign, FiMenu } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

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
    location: "/credit",
    title: "Credit Cards",
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

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      paddingX="4"
      alignItems="center"
      height="16"
      bgColor="blackAlpha.200"
    >
      <Text
        fontSize="xl"
        userSelect="none"
        display="flex"
        alignItems="center"
        gap="2"
      >
        <FiDollarSign size="1em" />
        Money Smart
      </Text>
      <Tabs
        display={{ base: "none", md: "none", lg: "none", xl: "initial" }}
        index={PAGES.findIndex(
          (page) =>
            page.location === location.pathname ||
            (page.default && location.pathname === "/")
        )}
        onChange={(index) => {
          navigate(PAGES[index].location);
        }}
      >
        <TabList>
          {PAGES.map((page) => (
            <Tab userSelect="none" key={page.location} whiteSpace="nowrap">
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
              active={true}
            >
              {page.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default Topbar;
