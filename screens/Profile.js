import React from "react";
import { Box } from "native-base";
import { NavBar } from "../components/Navigation/NavBar";
import { Header } from "../components/Header";

function Profile() {
  return (
    <Box height="100%" bg="grayscale.1" safeAreaTop>
      <Header text="Profile" />
      <NavBar />
    </Box>
  );
}

export { Profile };
