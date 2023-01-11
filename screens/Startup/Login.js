import React, { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import loginUser from "../../api/users/loginUser";
import pb from "../../api/base";
import * as SplashScreen from "expo-splash-screen";
import { Box, Flex, VStack, HStack, Link, Text, Heading } from "native-base";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { InputField } from "../../components/Login/InputField";
import { GradientButton } from "../../components/Login/GradientButton";

SplashScreen.preventAutoHideAsync();

function Login() {
  const navigation = useNavigation();
  const [isReady, setReady] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [formData, setData] = useState({});

  const getUserData = async () => {
    try {
      const value = await AsyncStorage.getItem("@userKey");
      if (value !== null) {
        pb.authStore.loadFromCookie(value);
        try {
          pb.authStore.isValid && (await pb.collection("users").authRefresh());
          if (pb.authStore.model.verified) {
            navigation.navigate("home");
          } else {
            navigation.navigate("verify");
          }
        } catch (_) {
          pb.authStore.clear();
        }
      }
    } catch (e) {
      console.log("Error retrieving user key");
    } finally {
      setReady(true);
    }
  };

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  useFocusEffect(
    useCallback(() => {
      getUserData();
      return () => {
        setData({});
      };
    }, [])
  );

  if (!isReady) {
    return null;
  }

  return (
    <Box height="100%" bg="grayscale.1" safeAreaTop onLayout={onLayoutRootView}>
      <Flex
        width="100%"
        height="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <VStack width="80%" space={7}>
          <SvgXml
            xml={`<svg width="398" height="246" viewBox="0 0 398 246" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M282.5 153.5L202 103.5L367 1.5L163.5 94L89 72L367 1.5L282.5 153.5Z" fill="#B1CDE2"/>
<path d="M367 1.5L282.5 153.5L202 103.5L367 1.5ZM367 1.5L89 72L163.5 94L367 1.5Z" stroke="black"/>
<path d="M184 162.5L163.5 94L366.5 2L202 103.5L231 121.5L184 162.5Z" fill="#8BBDD8"/>
<path d="M184 162.5L163.5 94L366.5 2L202 103.5M184 162.5L202 103.5M184 162.5L231 121.5L202 103.5" stroke="black"/>
<path d="M169.5 175C128 216.5 108.132 243.084 55 236C2.5 229 -16.5 175 19 141C33.6667 129.833 69.9 116.6 97.5 153C120.626 183.5 154.4 235.2 256 244C283 245.333 348.9 237.3 396.5 194.5" stroke="black" stroke-width="2" stroke-dasharray="15 15"/>
</svg>`}
            height="25%"
            alignSelf="center"
          />
          <VStack>
            <Heading size="h1" fontWeight="900">
              Login
            </Heading>
            <Text size="b3" fontWeight="500" color="grayscale.5">
              Please sign in to continue.
            </Text>
          </VStack>
          <VStack space={4} alignItems="center">
            <InputField
              placeholderText="Email"
              value={formData.email}
              iconName="email-outline"
              isRequired={true}
              onChangeText={(value) => setData({ ...formData, email: value })}
            />
            <InputField
              placeholderText="Password"
              value={formData.password}
              iconName="lock-outline"
              linkText="Forgot"
              type="password"
              isRequired={true}
              onChangeText={(value) =>
                setData({ ...formData, password: value })
              }
            />
            <GradientButton
              buttonText="Login"
              isLoading={isLoading}
              isLoadingText="Logging in"
              onPress={async () => {
                setLoading(true);
                const result = await loginUser(
                  formData.email,
                  formData.password
                );

                if (result === true) {
                  try {
                    await AsyncStorage.setItem(
                      "@userKey",
                      pb.authStore.exportToCookie()
                    );
                  } catch (e) {
                    console.log("Unable to save user token");
                  }
                  if (pb.authStore.model.verified) {
                    navigation.navigate("home");
                  } else {
                    navigation.navigate("verify");
                  }
                } else {
                  console.log(result);
                }
                setLoading(false);
              }}
            />
          </VStack>
          <HStack space={1} width="100%" justifyContent="center">
            <Text size="b4" color="grayscale.4">
              Don't have an account?
            </Text>
            <Link
              onPress={() => {
                navigation.navigate("signup");
              }}
            >
              Sign up
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}

export { Login };
