import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider, extendTheme } from "native-base";
import { useFonts } from "expo-font";
import { Home } from "./screens/Home";
import { Liftclub } from "./screens/Liftclub";
import { Schedule } from "./screens/Schedule";
import { Profile } from "./screens/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  const theme = extendTheme({
    colors: {
      app: {
        primary: "#8BBDD8",
        secondary: "#B1CDE2",
        tertiary: "#CDE0EF",
        accent1: "#CBDDE8",
        accent2: "#DDECF3",
      },
      grayscale: {
        1: "#FFFFFF",
        2: "#EBEBF0",
        3: "#D5D5DE",
        4: "#ABABB5",
        5: "#69696B",
        6: "#111111",
      },
    },
    fontConfig: {
      Manrope: {
        100: {
          normal: "Manrope-ExtraLight",
        },
        200: {
          normal: "Manrope-Light",
        },
        300: {
          normal: "Manrope-Light",
        },
        400: {
          normal: "Manrope-Regular",
        },
        500: {
          normal: "Manrope-Medium",
        },
        600: {
          normal: "Manrope-SemiBold",
        },
        700: {
          normal: "Manrope-Bold",
        },
        800: {
          normal: "Manrope-ExtraBold",
        },
        900: {
          normal: "Manrope-ExtraBold",
        },
      },
    },
    fonts: {
      heading: "Manrope",
      body: "Manrope",
      mono: "Manrope",
    },
  });

  const [fontsLoaded] = useFonts({
    "Manrope-ExtraLight": require("./assets/fonts/static/Manrope-ExtraLight.ttf"),
    "Manrope-Light": require("./assets/fonts/static/Manrope-Light.ttf"),
    "Manrope-Regular": require("./assets/fonts/static/Manrope-Regular.ttf"),
    "Manrope-Medium": require("./assets/fonts/static/Manrope-Medium.ttf"),
    "Manrope-SemiBold": require("./assets/fonts/static/Manrope-SemiBold.ttf"),
    "Manrope-Bold": require("./assets/fonts/static/Manrope-Bold.ttf"),
    "Manrope-ExtraBold": require("./assets/fonts/static/Manrope-ExtraBold.ttf"),
  });

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="home"
          screenOptions={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
        >
          <Tab.Screen name="home" component={Home} />
          <Tab.Screen name="liftclub" component={Liftclub} />
          <Tab.Screen name="schedule" component={Schedule} />
          <Tab.Screen name="profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
