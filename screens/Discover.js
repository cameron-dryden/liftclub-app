import React from "react";
import { Box, VStack } from "native-base";
import { NavBar } from "../components/Navigation/NavBar";
import { Header } from "../components/Header";

function Discover(props) {
  return (
    <Box height="100%" bg="grayscale.2" safeAreaTop>
      <VStack width="100%" alignItems="center" space={3}>
        <Header text="Discover" />
      </VStack>
      <NavBar
        navSelected={props.navSelected}
        setNavSelected={props.setNavSelected}
      />
    </Box>
  );
}

export { Discover };
