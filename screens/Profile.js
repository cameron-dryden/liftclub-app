import React from "react";
import { Box, VStack, useColorMode, Button } from "native-base";
import { NavBar } from "../components/Navigation/NavBar";
import { Header } from "../components/Header";
import { AccountCard } from "../components/Profile/AccountCard";

function Profile(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box height="100%" bg="grayscale.1" safeAreaTop>
      <VStack width="100%" alignItems="center" space={3}>
        <Header text="Profile" />
        <AccountCard />
        <Button onPress={() => toggleColorMode()}>{colorMode}</Button>
      </VStack>
      <NavBar
        navSelected={props.navSelected}
        setNavSelected={props.setNavSelected}
      />
    </Box>
  );
}

export { Profile };
