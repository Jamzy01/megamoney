import {
  Box,
  Button,
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
import { FiMoreHorizontal, FiDollarSign } from "react-icons/fi";
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
      paddingX="var(--chakra-space-8)"
      alignItems="center"
      height="var(--chakra-sizes-16)"
      bgColor="blackAlpha.200"
    >
      <Text
        fontSize="xl"
        userSelect="none"
        display="flex"
        alignItems="center"
        gap="var(--chakra-space-2)"
      >
        <FiDollarSign size="1em" />
        Money Smart
      </Text>
      <Tabs
        display={{ base: "none", md: "none", lg: "initial" }}
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
            <Tab userSelect="none" key={page.location}>
              {page.title}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <Menu>
        <MenuButton
          display={{ base: "initial", md: "initial", lg: "none" }}
          as={Button}
          rightIcon={<FiMoreHorizontal />}
        >
          Pages
        </MenuButton>
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
