import React, { useCallback, useState } from "react";
import { Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import loginUser from "../../api/users/loginUser";
import pb from "../../api/base";
import * as SplashScreen from "expo-splash-screen";
import { Box, Flex, VStack, HStack, Link, Text, Heading } from "native-base";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AnimatedLogo from "../../assets/AnimatedLogo";
import Test from "../../assets/Test";
import { EmailAlternate } from "../../assets/icons/Icons";
import {
  FormButton,
  FormInput,
  FormPassword,
} from "../../components/Input/Form/FormComponents";

SplashScreen.preventAutoHideAsync();

function Login({ navigation }) {
  const mainnavigation = useNavigation();
  const [isReady, setReady] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [keyboardShowing, setKeyboardShowing] = useState(false);
  const [formData, setData] = useState({});
  const [inputFocused, setInputFocused] = useState(null);

  const getUserData = async () => {
    try {
      const value = await AsyncStorage.getItem("@userKey");
      if (value !== null) {
        pb.authStore.loadFromCookie(value);
        try {
          pb.authStore.isValid && (await pb.collection("users").authRefresh());
          if (pb.authStore.model.verified) {
            mainnavigation.navigate("home");
          } else {
            navigation.navigate("email-verification");
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

      const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardShowing(true);
      });
      const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardShowing(false);
      });

      return () => {
        showSubscription.remove();
        hideSubscription.remove();
        setData({});
      };
    }, [])
  );

  if (!isReady) {
    return null;
  }

  return (
    <Flex
      bg="white"
      width="100%"
      height="100%"
      safeAreaTop
      onLayout={onLayoutRootView}
    >
      <Box
        height="20%"
        py={4}
        flex={1}
        justifyContent="center"
        alignItems="center"
      >
        <AnimatedLogo width="70%" height="70%" />
        {/* <Test textWidth={2} /> */}
      </Box>
      <VStack space={6} width="85%" flex={2} alignSelf="center">
        <VStack>
          <Heading size="2xl">Welcome back</Heading>
          <Text
            fontSize="md"
            fontWeight="medium"
            lineHeight="xs"
            color="text.400"
          >
            Please log in to continue
          </Text>
        </VStack>
        <VStack alignItems="center" space={10}>
          <VStack space={7} width="100%">
            <FormInput
              placeholder="Email"
              value={formData.email}
              keyboardType="email-address"
              InputLeftElement={
                <EmailAlternate
                  size="md"
                  m={1}
                  color={inputFocused === "email" ? "primary.200" : "muted.500"}
                />
              }
              onChangeText={(value) => setData({ ...formData, email: value })}
              onFocus={() => setInputFocused("email")}
              onBlur={() => setInputFocused(null)}
            />
            <FormPassword
              placeholder="Password"
              addForgot={true}
              value={formData.password}
              onChangeText={(value) =>
                setData({ ...formData, password: value })
              }
            />
          </VStack>
          <FormButton
            buttonText="Login"
            isLoading={isLoading}
            isLoadingText="Logging in"
            onPress={async () => {
              setLoading(true);
              const result = await loginUser(formData.email, formData.password);
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
                  mainnavigation.navigate("home");
                } else {
                  navigation.navigate("email-verification");
                }
              } else {
                console.log(result);
              }
              setLoading(false);
            }}
          />
        </VStack>
      </VStack>

      <HStack justifyContent="center" space={1} safeAreaBottom height="8%">
        {!keyboardShowing && (
          <>
            <Text fontSize="md" color="text.500">
              Don't have an account?
            </Text>
            <Link
              _text={{ fontSize: "md" }}
              onPress={() => {
                navigation.navigate("signup");
              }}
            >
              Sign up
            </Link>
          </>
        )}
      </HStack>
    </Flex>
  );
}

export { Login };
