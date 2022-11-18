import React from "react";
import { Box, VStack, Flex, ScrollView } from "native-base";
import { Header } from "../../components/Header";
import { LiftclubProfile } from "../../components/Liftclub/LiftclubProfile";
import { NavBar } from "../../components/Navigation/NavBar";

function LiftsLift(props) {
  const liftclubs = require("../../testing/liftclubs.json");
  return (
    <Box height="100%" bg="grayscale.1" safeAreaTop>
      <Flex width="100%" height="100%" direction="column">
        <Header text="My lift clubs" />
        <ScrollView width="100%" flex={1}>
          <VStack alignItems="center" space={3} py="10px">
            {liftclubs.map((liftclub) => (
              <LiftclubProfile
                key={liftclub.id}
                clubName={liftclub.club_name}
                notifications={liftclub.notifications}
                clubColor={"app." + liftclub.club_color}
                {...props}
              />
            ))}
          </VStack>
        </ScrollView>
        <NavBar position="relative" />
      </Flex>
    </Box>
  );
}

export { LiftsLift };
