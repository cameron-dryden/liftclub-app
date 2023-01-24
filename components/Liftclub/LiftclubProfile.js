import React from "react";
import {
  Box,
  HStack,
  VStack,
  Badge,
  Flex,
  Pressable,
  Icon,
  Heading,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function LiftclubProfile(props) {
  const dayShort = [
    { id: 1, name: "M", selected: true },
    { id: 2, name: "T", selected: true },
    { id: 3, name: "W", selected: false },
    { id: 4, name: "T", selected: true },
    { id: 5, name: "F", selected: false },
    { id: 6, name: "S", selected: false },
  ];

  return (
    <Pressable
      onPress={() => {
        props.navigation.navigate("clubchat", { clubName: props.clubName });
      }}
    >
      <Box
        width="90%"
        bg="grayscale.1"
        rounded="10px"
        justifyContent="center"
        alignItems="center"
        shadow={3}
      >
        <Flex width="100%" flexDirection="row">
          <Box width="10px" roundedLeft="10px" bg={props.clubColor}></Box>
          <VStack space={3} pl="10px" pb="40px" pt="5px" flex={1}>
            <Heading size="lg">{props.clubName}</Heading>
            <HStack space={1}>
              {dayShort.map((day) => (
                <Badge
                  key={day.id}
                  bg={day.selected ? props.clubColor : "grayscale.1"}
                  width="35px"
                  height="35px"
                  rounded="full"
                  borderWidth={day.selected ? "0px" : "2px"}
                  borderColor={props.clubColor}
                  _text={
                    day.selected
                      ? {
                          color: "grayscale.1",
                          fontSize: 16,
                          fontWight: "500",
                          lineHeight: "21px",
                        }
                      : {
                          color: props.clubColor,
                          fontSize: 16,
                          fontWight: "500",
                          lineHeight: "21px",
                        }
                  }
                >
                  {day.name}
                </Badge>
              ))}
            </HStack>
          </VStack>
          <VStack space={5} pt="5px" alignItems="center" width="15%">
            <Badge
              bg={props.clubColor}
              height="28px"
              rounded="full"
              _text={{
                color: "grayscale.1",
                fontSize: 16,
                fontWight: "500",
                lineHeight: "21px",
              }}
            >
              {props.notifications}
            </Badge>
            <Icon
              as={<MaterialCommunityIcons name="chevron-right" />}
              color="grayscale.6"
              size="25px"
            />
          </VStack>
        </Flex>
      </Box>
    </Pressable>
  );
}

export { LiftclubProfile };
