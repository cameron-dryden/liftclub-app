import React from "react";
import { Box, HStack, VStack, Badge, Text, Heading } from "native-base";

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
          <Heading size="sm">{props.time}</Heading>
        </Box>
        <Box justifyContent="center">
          <Text size="lg" fontWeight="500" pl="10px">
            {props.clubName}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}

function LiftsAgenda(props) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = props.date.split("-");
  const day = date[2];
  const month = monthNames[date[1] - 1];
  const year = date[0];

  const daysBetween = () => {
    const today = new Date();
    const selDate = new Date(year, date[1] - 1, day);
    const daysDiff = Math.round(
      (selDate.getTime() - today.getTime()) / (1000 * 3600 * 24) + 1
    );
    if (daysDiff == 0) {
      return (
        <Badge
          bg="app.primary"
          height="30px"
          rounded="full"
          _text={{
            color: "grayscale.1",
            fontSize: 16,
            fontWight: "500",
            lineHeight: "21px",
          }}
        >
          Today
        </Badge>
      );
    }
  };

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
        <HStack justifyContent="center" space={2}>
          {daysBetween()}
          <Heading size="md"> {`${day} ${month} ${year}`}</Heading>
        </HStack>
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
