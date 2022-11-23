import React, { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";
import { Box, HStack, Pressable, Center, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Body4 } from "../Typography/Body";
import { useNavigation } from "@react-navigation/native";

const AnimatedBox = Animated.createAnimatedComponent(Box);

const screens = [
  {
    id: "home",
    screen_name: "home",
    icon: "home-outline",
    display: "Home",
    selected: 0,
  },
  {
    id: "liftclub",
    screen_name: "liftclub",
    icon: "account-outline",
    display: "Lift Club",
    selected: 1,
  },
  {
    id: "schedule",
    screen_name: "schedule",
    icon: "cart-outline",
    display: "Schedule",
    selected: 2,
  },
  {
    id: "profile",
    screen_name: "profile",
    icon: "account-outline",
    display: "Profile",
    selected: 3,
  },
];

function AnimatedNavText(props) {
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [slideAnim]);

  return (
    <AnimatedBox
      {...props}
      width={slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", "100%"],
      })}
    />
  );
}

function NavBar(props) {
  const [selected, setSelected] = React.useState(1);
  const navigation = useNavigation();
  return (
    <Box
      bg="grayscale.1"
      width="100%"
      position="absolute"
      bottom="0"
      roundedTop="25px"
      {...props}
    >
      <HStack alignItems="center" justifyContent="space-evenly">
        {screens.map((screen) => (
          <Pressable
            py="2"
            onPress={() => {
              setSelected(screen.selected);
              navigation.navigate(screen.screen_name);
            }}
          >
            <Center>
              <Icon
                as={<MaterialCommunityIcons name={screen.icon} />}
                color={
                  selected === screen.selected ? "app.primary" : "grayscale.3"
                }
                size="48px"
              />
              {selected === screen.selected ? (
                <Box width="100%">
                  <Body4 color="app.primary" fontWeight="700">
                    {screen.display}
                  </Body4>
                  <AnimatedNavText
                    height="4px"
                    bg="app.primary"
                    rounded="full"
                  />
                </Box>
              ) : (
                ""
              )}
            </Center>
          </Pressable>
        ))}
      </HStack>
    </Box>
  );
}

export { NavBar };
