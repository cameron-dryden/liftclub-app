import React from "react";
import { Box, VStack } from "native-base";
import { NavBar } from "../components/Navigation/NavBar";
import { Header } from "../components/Header";
import { AccountCard } from "../components/Profile/AccountCard";

function Profile() {
  return (
    <Box height="100%" bg="grayscale.1" safeAreaTop>
      <VStack width="100%" alignItems="center" space={3}>
        <Header text="Profile" />
        <AccountCard />
      </VStack>
      <NavBar />
    </Box>
  );
}

export { Profile };
