import React from "react";
import { Box, VStack } from "native-base";
import { NavBar } from "../components/Navigation/NavBar";
import { Header } from "../components/Header";
import { LiftsCalendar } from "../components/Schedule/LiftsCalendar";
import { LiftsAgenda } from "../components/Schedule/LiftsAgenda";

function Schedule() {
  return (
    <Box height="100%" bg="grayscale.1" safeAreaTop>
      <VStack space="4">
        <Header text="Schedule" />
        <LiftsCalendar />
        <LiftsAgenda />
      </VStack>
      <NavBar />
    </Box>
  );
}

export { Schedule };
