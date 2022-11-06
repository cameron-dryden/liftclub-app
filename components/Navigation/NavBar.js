import React from "react";
import { Box, HStack, Pressable, Center, Icon } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Body5 } from "../Typography/Body";

function NavBar() {
  const [selected, setSelected] = React.useState(1);
  return (
    <Box bg="grayscale.1" width="100%">
      <HStack bg="grayscale.1" alignItems="center">
        <Pressable py="2" flex={1} onPress={() => setSelected(0)}>
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 0 ? "home" : "home-outline"}
                />
              }
              color={selected === 0 ? "app.primary" : "app.secondary"}
              size="48px"
            />
            <Body5
              color={selected === 0 ? "app.primary" : "app.secondary"}
              fontWeight="500"
            >
              Home
            </Body5>
          </Center>
        </Pressable>
        <Pressable py="2" flex={1} onPress={() => setSelected(1)}>
          <Center>
            <Icon
              mb="1"
              as={<MaterialIcons name="search" />}
              color={selected === 1 ? "app.primary" : "app.secondary"}
              size="48px"
            />
            <Body5
              color={selected === 1 ? "app.primary" : "app.secondary"}
              fontWeight="500"
            >
              Lift Club
            </Body5>
          </Center>
        </Pressable>
        <Pressable py="2" flex={1} onPress={() => setSelected(2)}>
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 2 ? "cart" : "cart-outline"}
                />
              }
              color={selected === 2 ? "app.primary" : "app.secondary"}
              size="48px"
            />
            <Body5
              color={selected === 2 ? "app.primary" : "app.secondary"}
              fontWeight="500"
            >
              Schedule
            </Body5>
          </Center>
        </Pressable>
        <Pressable py="2" flex={1} onPress={() => setSelected(3)}>
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 3 ? "account" : "account-outline"}
                />
              }
              color={selected === 3 ? "app.primary" : "app.secondary"}
              size="48px"
            />
            <Body5
              color={selected === 3 ? "app.primary" : "app.secondary"}
              fontWeight="500"
            >
              Profile
            </Body5>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
}

export { NavBar };
