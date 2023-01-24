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
      primary: {
        50: "#e1f8fe",
        100: "#c0e4ef",
        200: "#9dd1e1",
        300: "#78bed4",
        400: "#55aac7",
        500: "#3e92ae",
        600: "#2e7188",
        700: "#1e5162",
        800: "#0c313d",
        900: "#001219",
      },
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
      Input: {
        variants: {
          fancyInput: ({}) => {
            return {
              variant: "underlined",
              borderWidth: "0px",
              borderBottomWidth: "1px",
              pt: "1px",
              pb: "2px",
              px: "10px",
              fontWeight: "700",
              _input: {
                fontSize: "14",
              },
              _focus: {
                letterSpacing: "0px",
                placeholder: "",
                borderBottomWidth: "0px",
                rounded: "10px",
                _input: {
                  fontSize: "16",
                },
                _android: { selectionColor: "grayscale.6" },
                _ios: { selectionColor: "grayscale.6" },
              },
              _light: {
                backgroundColor: "grayscale.1",
                borderColor: "grayscale.3",
                placeholderTextColor: "grayscale.4",
                color: "grayscale.6",
                _input: {
                  bg: "grayscale.1",
                },
                _focus: {
                  _android: { selectionColor: "grayscale.6" },
                  _ios: { selectionColor: "grayscale.6" },
                },
              },
              _dark: {
                backgroundColor: "grayscale.6",
                borderColor: "app.primary",
                placeholderTextColor: "grayscale.2",
                color: "app.primary",
                _input: {
                  bg: "grayscale.6",
                },
                _focus: {
                  _android: { selectionColor: "grayscale.1" },
                  _ios: { selectionColor: "grayscale.1" },
                },
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
              px: "15px",
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
        // defaultProps: {
        //   variant: "fancyInput",
        // },
      },
      Link: {
        defaultProps: {
          _text: { color: "primary.200" },
          isUnderlined: false,
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
              _light: {
                bg: "grayscale.1",
              },
              _dark: {
                bg: "grayscale.6",
              },
              rounded: "10px",
            };
          },
        },
        // defaultProps: {
        //   variant: "fancyInput",
        // },
      },
      FormControlLabel: {
        variants: {
          fancyInput: ({}) => {
            return {
              _text: {
                fontSize: "12",
                fontWeight: "700",
                letterSpacing: "0.5px",
                pr: "2px",
              },
              ml: "42px",
              my: "0px",
              _light: {
                _text: {
                  color: "grayscale.4",
                },
              },
              _dark: {
                _text: {
                  color: "grayscale.2",
                },
              },
            };
          },
        },
        // defaultProps: {
        //   variant: "fancyInput",
        // },
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
