import React from "react";
import { Box, HStack } from "native-base";
import { NavBar } from "../components/Navigation/NavBar";
import { SearchBar } from "../components/SearchBar";
import { Profilephoto } from "../components/Profilephoto";
import { Header } from "../components/Header";
import { LiftsCalendar } from "../components/LiftsCalendar";

function Home() {
  return (
    <Box height="100%" bg="grayscale.1" safeAreaTop>
      <Header text="Home" />
      <HStack space="5" px="5%" pt="10%">
        <SearchBar />
        <Profilephoto />
      </HStack>
      <LiftsCalendar />
      <NavBar />
    </Box>
  );
}

export { Home };
