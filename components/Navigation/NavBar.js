import React, { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";
import { Box, HStack, Pressable, Center, Icon, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AnimatedBox = Animated.createAnimatedComponent(Box);
const AnimatedText = Animated.createAnimatedComponent(Text);

const screens = [
  {
    screen_name: "home",
    icon: "home-variant-outline",
    display: "Home",
    selected: 0,
  },
  {
    screen_name: "liftclub",
    icon: "car",
    display: "Lift Club",
    selected: 1,
  },
  {
    screen_name: "discover",
    icon: "compass-outline",
    display: "Discover",
    selected: 2,
  },
  {
    screen_name: "schedule",
    icon: "calendar",
    display: "Schedule",
    selected: 3,
  },
  {
    screen_name: "profile",
    icon: "account-outline",
    display: "Profile",
    selected: 4,
  },
];

function AnimatedNavText(props) {
  const slideBox = useRef(new Animated.Value(0)).current;
  const slideText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(slideBox, {
        toValue: 1,
        duration: 180,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }),
      Animated.timing(slideText, {
        toValue: 1,
        duration: 220,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }),
    ]).start();
  }, [slideBox, slideText]);

  return (
    <Box width="100%" overflow="hidden">
      <AnimatedText
        fontSize="16px"
        lineHeight="24px"
        color="app.primary"
        fontWeight="700"
        style={{
          transform: [
            {
              translateY: slideText.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              }),
            },
          ],
        }}
      >
        {props.display}
      </AnimatedText>
      <AnimatedBox
        height="4px"
        bg="app.primary"
        rounded="full"
        width={slideBox.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", "100%"],
        })}
      />
    </Box>
  );
}

function NavBar(props) {
  // const [selected, setSelected] = React.useState(0);
  const navigation = useNavigation();

  return (
    <Box
      bg="grayscale.1"
      width="100%"
      position="absolute"
      bottom="0"
      borderTopWidth="2px"
      borderColor="app.primary"
      roundedTop="25px"
      {...props}
    >
      <HStack alignItems="center" justifyContent="space-evenly">
        {screens.map((screen) => (
          <Pressable
            key={screen.screen_name}
            py="2"
            onPress={() => {
              props.setNavSelected(screen.selected);
              navigation.navigate(screen.screen_name);
            }}
          >
            <Center>
              <Icon
                as={<MaterialCommunityIcons name={screen.icon} />}
                color={
                  props.navSelected === screen.selected
                    ? "app.primary"
                    : "grayscale.3"
                }
                size="38px"
              />
              {props.navSelected === screen.selected ? (
                <AnimatedNavText display={screen.display} />
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
