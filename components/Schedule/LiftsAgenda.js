import React from "react";
import { Box, HStack, VStack } from "native-base";
import { Heading4, Heading5 } from "../Typography/Headings";
import { Body3 } from "../Typography/Body";

function AgendaItem(props) {
  return (
    <Box
      width="90%"
      height="45px"
      bg="grayscale.1"
      borderWidth="2px"
      borderColor={props.agendaColor}
      rounded="5px"
    >
      <HStack height="100%">
        <Box
          width="25%"
          bg={props.agendaColor}
          alignItems="center"
          justifyContent="center"
        >
          <Heading5>{props.time}</Heading5>
        </Box>
        <Box justifyContent="center">
          <Body3 fontWeight="500" pl="10px">
            {props.clubName}
          </Body3>
        </Box>
      </HStack>
    </Box>
  );
}

function LiftsAgenda() {
  return (
    <Box
      alignSelf="center"
      width="90%"
      bg="grayscale.1"
      borderWidth="2px"
      borderColor="app.secondary"
      rounded="20px"
      justifyContent="center"
      alignItems="center"
      shadow={2}
    >
      <VStack width="100%" space={2} pt="5px" pb="10px" alignItems="center">
        <Heading4>Today, 3 September 2022</Heading4>
        <AgendaItem
          agendaColor="app.red"
          time="08:50"
          clubName="Cameron's lift club"
        />
        <AgendaItem
          agendaColor="app.purple"
          time="17:00"
          clubName="Dani's lift club"
        />
      </VStack>
    </Box>
  );
}

export { LiftsAgenda };
