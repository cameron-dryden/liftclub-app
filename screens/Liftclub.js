import React from "react";
import { Box } from "native-base";
import { NavBar } from "../components/Navigation/NavBar";
import { Header } from "../components/Header";

function Liftclub() {
  return (
    <Box height="100%" bg="grayscale.1" safeAreaTop>
      <Header text="Liftclub" />
      <NavBar />
    </Box>
  );
}

export { Liftclub };
