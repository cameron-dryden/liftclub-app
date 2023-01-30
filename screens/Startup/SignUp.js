import React, { useCallback, useState } from "react";
import { Keyboard } from "react-native";
import {
  Flex,
  VStack,
  HStack,
  Link,
  Text,
  Heading,
  IconButton,
} from "native-base";
import { useFocusEffect } from "@react-navigation/native";
import {
  FormButton,
  FormInput,
  FormPassword,
} from "../../components/Input/Form/FormComponents";
import { Badge, EmailAlternate, ChevronLeft } from "../../assets/icons/Icons";

function SignUp({ navigation }) {
  const [formData, setData] = useState({});
  const [validInputs, setValidInputs] = useState({});
  const [inputFocused, setInputFocused] = useState(null);
  const [keyboardShowing, setKeyboardShowing] = useState(false);

  const validateInputs = () => {
    const inputs = ["name", "surname", "email", "password", "passwordConfirm"];
    let flag = true;

    for (let input of inputs) {
      if (formData[input] === "" || formData[input] == null) {
        setValidInputs((prevState) => ({
          ...prevState,
          [input]: {
            isInvalid: true,
            errorMessage: "This field is required.",
          },
        }));
        flag = false;
      } else if (input === "email") {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!emailRegex.test(formData.email)) {
          setValidInputs((prevState) => ({
            ...prevState,
            [input]: {
              isInvalid: true,
              errorMessage: "Invalid email.",
            },
          }));
          flag = false;
        }
      } else if (input === "password") {
        if (formData.password.length < 8) {
          setValidInputs((prevState) => ({
            ...prevState,
            [input]: {
              isInvalid: true,
              errorMessage: "Password must be at least 8 characters.",
            },
          }));
          flag = false;
        }
      } else if (input === "passwordConfirm") {
        if (formData.password !== formData.passwordConfirm) {
          setValidInputs((prevState) => ({
            ...prevState,
            [input]: {
              isInvalid: true,
              errorMessage: "Passwords do not match.",
            },
          }));
          flag = false;
        }
      }
    }

    return flag;
  };

  useFocusEffect(
    useCallback(() => {
      const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardShowing(true);
      });
      const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardShowing(false);
      });

      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, [])
  );

  return (
    <Flex bg="white" width="100%" height="100%" safeAreaTop>
      <IconButton
        icon={<ChevronLeft size="2xl" color="muted.900" />}
        rounded="full"
        size="sm"
        p={2}
        mx={2}
        mt={4}
        alignSelf="flex-start"
        isDisabled={keyboardShowing}
        _disabled={{ _icon: { color: "transparent" } }}
        onPress={() => navigation.navigate("login")}
      />

      <VStack
        space={6}
        width="85%"
        flex={2}
        alignSelf="center"
        justifyContent="center"
      >
        <VStack>
          <Heading size="2xl">Welcome</Heading>
          <Text
            fontSize="md"
            fontWeight="medium"
            lineHeight="xs"
            color="text.400"
          >
            Create an account to get started
          </Text>
        </VStack>
        <VStack alignItems="center" space={10}>
          <VStack space={5} width="100%">
            <FormInput
              placeholder="First name"
              value={formData.name}
              InputLeftElement={
                <Badge
                  size="md"
                  m={1}
                  color={inputFocused === "name" ? "primary.200" : "muted.500"}
                />
              }
              errorMessage={(validInputs.name || {}).errorMessage}
              _form={{
                isInvalid: (validInputs.name || {}).isInvalid,
              }}
              onChangeText={(value) => {
                setValidInputs({ ...validInputs, name: {} });
                setData({ ...formData, name: value });
              }}
              onFocus={() => setInputFocused("name")}
              onBlur={() => setInputFocused(null)}
            />
            <FormInput
              placeholder="Surname"
              value={formData.surname}
              InputLeftElement={
                <Badge
                  size="md"
                  m={1}
                  color={
                    inputFocused === "surname" ? "primary.200" : "muted.500"
                  }
                />
              }
              errorMessage={(validInputs.surname || {}).errorMessage}
              _form={{
                isInvalid: (validInputs.surname || {}).isInvalid,
              }}
              onChangeText={(value) => {
                setValidInputs({ ...validInputs, surname: {} });
                setData({ ...formData, surname: value });
              }}
              onFocus={() => setInputFocused("surname")}
              onBlur={() => setInputFocused(null)}
            />
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
              errorMessage={(validInputs.email || {}).errorMessage}
              _form={{
                isInvalid: (validInputs.email || {}).isInvalid,
              }}
              onChangeText={(value) => {
                setValidInputs({ ...validInputs, email: {} });
                setData({ ...formData, email: value });
              }}
              onFocus={() => setInputFocused("email")}
              onBlur={() => setInputFocused(null)}
            />
            <FormPassword
              placeholder="Password"
              helperText="Password should contain at least 8 characters."
              value={formData.password}
              errorMessage={(validInputs.password || {}).errorMessage}
              _form={{
                isInvalid: (validInputs.password || {}).isInvalid,
              }}
              onChangeText={(value) => {
                setValidInputs({ ...validInputs, password: {} });
                setData({ ...formData, password: value });
              }}
            />
            <FormPassword
              placeholder="Confirm password"
              value={formData.passwordConfirm}
              errorMessage={(validInputs.passwordConfirm || {}).errorMessage}
              _form={{
                isInvalid: (validInputs.passwordConfirm || {}).isInvalid,
              }}
              onChangeText={(value) => {
                setValidInputs({ ...validInputs, passwordConfirm: {} });

                setData({ ...formData, passwordConfirm: value });
              }}
            />
          </VStack>
          <FormButton
            buttonText="Continue"
            onPress={() => {
              if (validateInputs()) {
                navigation.navigate("verify", { signUpData: formData });
              }
            }}
          />
        </VStack>
      </VStack>

      <HStack justifyContent="center" space={1} safeAreaBottom height="8%">
        {!keyboardShowing && (
          <>
            <Text fontSize="md" color="text.500">
              Already have an account?
            </Text>
            <Link
              _text={{ fontSize: "md" }}
              onPress={() => {
                navigation.navigate("login");
              }}
            >
              Log in
            </Link>
          </>
        )}
      </HStack>
    </Flex>
  );
}

export { SignUp };
