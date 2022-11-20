import React from "react";
import { Box, VStack, ScrollView, Flex } from "native-base";
import { NavBar } from "../components/Navigation/NavBar";
import { Header } from "../components/Header";
import { LiftsCalendar } from "../components/Schedule/LiftsCalendar";
import { LiftsAgenda } from "../components/Schedule/LiftsAgenda";

function Schedule() {
  const [selectedDate, setSelectedDate] = React.useState(() => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  });

  return (
    <Box height="100%" bg="grayscale.1" safeAreaTop>
      <Flex width="100%" height="100%" direction="column">
        <Header text="Schedule" />
        <ScrollView flex={1} width="100%">
          <VStack space="4" py="12px">
            <LiftsCalendar setDate={setSelectedDate} />
            <LiftsAgenda date={selectedDate} />
          </VStack>
        </ScrollView>
        <NavBar position="relative" />
      </Flex>
    </Box>
  );
}

export { Schedule };
