import React, { useEffect } from "react";
import * as Location from "expo-location";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider, extendTheme } from "native-base";
import { useFonts } from "expo-font";
import { Home } from "./screens/Home";
import { Liftclub } from "./screens/Liftclub/Liftclub";
import { Schedule } from "./screens/Schedule";
import { Profile } from "./screens/Profile";
import { Discover } from "./screens/Discover";
import { Login } from "./screens/Startup/Login";
import { SignUp } from "./screens/Startup/SignUp";
import { Verify } from "./screens/Startup/Verify";

const Tab = createBottomTabNavigator();

export default function App() {
  const theme = extendTheme({
    colors: {
      app: {
        primary: "#8BBDD8",
        secondary: "#C7DEE9",
        tertiary: "#A3C3D3",
        accent: "#7BA9C2",
        dark: "#5C8CB3",
        // secondary: "#B1CDE2",
        // tertiary: "#CDE0EF",
        // accent1: "#CBDDE8",
        // accent2: "#DDECF3",
        red: "#F5A3A3",
        orange: "#F5CFA3",
        yellow: "#F5EDA3",
        green: "#B4F5A3",
        cyan: "#A3F5F0",
        blue: "#A3ABF5",
        purple: "#DBA3F5",
        pink: "#F5A3D4",
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
    components: {
      Text: {
        sizes: {
          b1: {
            fontSize: "22px",
            lineHeight: "30px",
          },
          b2: {
            fontSize: "20px",
            lineHeight: "28px",
          },
          b3: {
            fontSize: "18px",
            lineHeight: "26px",
          },
          b4: {
            fontSize: "16px",
            lineHeight: "24px",
          },
          b5: {
            fontSize: "14px",
            lineHeight: "22px",
          },
          b6: {
            fontSize: "12px",
            lineHeight: "20px",
          },
        },
        defaultProps: {
          fontWeight: "400",
          color: "grayscale.6",
          size: "b1",
        },
      },
      Heading: {
        sizes: {
          h1: {
            fontSize: "40px",
            lineHeight: "48px",
          },
          h2: {
            fontSize: "28px",
            lineHeight: "36px",
          },
          h3: {
            fontSize: "24px",
            lineHeight: "32px",
          },
          h4: {
            fontSize: "20px",
            lineHeight: "28px",
          },
          h5: {
            fontSize: "18px",
            lineHeight: "28px",
          },
        },
        defaultProps: {
          fontWeight: "600",
          color: "grayscale.6",
          size: "h1",
        },
      },
      Input: {
        variants: {
          fancyInput: ({}) => {
            return {
              variant: "underlined",
              backgroundColor: "grayscale.1",
              borderColor: "grayscale.3",
              borderWidth: "0px",
              borderBottomWidth: "1px",
              pt: "1px",
              pb: "2px",
              px: "10px",
              placeholderTextColor: "grayscale.4",
              color: "grayscale.6",
              fontSize: "14",
              fontWeight: "700",
              letterSpacing: "0.5px",
              _input: { bg: "grayscale.1" },
              _focus: {
                letterSpacing: "0px",
                fontSize: "16",
                placeholder: "",
                borderBottomWidth: "0px",
                rounded: "10px",
                _android: { selectionColor: "grayscale.6" },
                _ios: { selectionColor: "grayscale.6" },
              },
            };
          },
          condensedInput: ({}) => {
            return {
              variant: "rounded",
              backgroundColor: "grayscale.1",
              borderColor: "app.tertiary",
              borderWidth: "2",
              borderRadius: "full",
              py: "0",
              px: "3",
              placeholderTextColor: "grayscale.4",
              color: "app.primary",
              fontSize: "16",
              fontWeight: "500",
              lineHeight: "24",
              _input: { bg: "grayscale.1" },
              _focus: {
                borderColor: "app.primary",
                _android: { selectionColor: "app.primary" },
                _ios: { selectionColor: "app.primary" },
              },
            };
          },
        },
        defaultProps: {
          variant: "fancyInput",
        },
      },
      Link: {
        variants: {
          basic: ({}) => {
            return {
              _text: {
                color: "app.primary",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
              },
            };
          },
        },
        defaultProps: {
          isUnderlined: false,
          variant: "basic",
        },
      },
      Button: {
        sizes: {
          basic: {
            py: "12px",
            _text: {
              fontSize: "18px",
            },
          },
        },
        variants: {
          basic: ({}) => {
            return {
              width: "50%",
              rounded: "full",
              mt: "10px",
              shadow: 2,
              bg: "app.primary",
              _text: {
                color: "grayscale.1",
                fontWeight: "500",
                lineHeight: "22px",
              },
              _pressed: {
                bg: "app.secondary",
              },
            };
          },
          gradient: ({}) => {
            return {
              _text: {
                color: "grayscale.1",
                fontWeight: "500",
                lineHeight: "22px",
              },
            };
          },
        },
        defaultProps: {
          variant: "basic",
          size: "basic",
        },
      },
      FormControl: {
        variants: {
          fancyInput: ({}) => {
            return {
              bg: "grayscale.1",
              rounded: "10px",
            };
          },
        },
        defaultProps: {
          variant: "fancyInput",
        },
      },
      FormControlLabel: {
        variants: {
          fancyInput: ({}) => {
            return {
              _text: {
                fontSize: "12",
                fontWeight: "700",
                color: "grayscale.4",
                letterSpacing: "0.5px",
                pr: "2px",
              },
              ml: "42px",
              my: "0px",
            };
          },
        },
        defaultProps: {
          variant: "fancyInput",
        },
      },
      Radio: {
        variants: {
          basic: ({}) => {
            return {
              borderColor: "grayscale.4",
              my: 1,
              _text: {
                fontSize: "16",
                fontWeight: "600",
                color: "grayscale.4",
                letterSpacing: "0.5px",
              },
              _checked: {
                borderColor: "app.primary",
                _icon: {
                  color: "app.primary",
                },
                _text: {
                  color: "app.primary",
                },
                _pressed: {
                  borderColor: "app.primary",
                },
              },
              _pressed: {
                borderColor: "app.primary",
              },
            };
          },
        },
        defaultProps: {
          variant: "basic",
        },
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

  const [navSelected, setNavSelected] = React.useState(0);

  const requestDevicePermissions = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
  };

  useEffect(() => {
    requestDevicePermissions();
  });

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="login"
          screenOptions={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
        >
          <Tab.Screen name="login">{() => <Login />}</Tab.Screen>
          <Tab.Screen name="signup">{() => <SignUp />}</Tab.Screen>
          <Tab.Screen name="verify">{() => <Verify />}</Tab.Screen>
          <Tab.Screen name="home">
            {() => (
              <Home navSelected={navSelected} setNavSelected={setNavSelected} />
            )}
          </Tab.Screen>
          <Tab.Screen name="liftclub">
            {() => (
              <Liftclub
                navSelected={navSelected}
                setNavSelected={setNavSelected}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="discover">
            {() => (
              <Discover
                navSelected={navSelected}
                setNavSelected={setNavSelected}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="schedule">
            {() => (
              <Schedule
                navSelected={navSelected}
                setNavSelected={setNavSelected}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="profile">
            {() => (
              <Profile
                navSelected={navSelected}
                setNavSelected={setNavSelected}
              />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
