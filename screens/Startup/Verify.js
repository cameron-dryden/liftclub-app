import React, { useState, useCallback } from "react";
import { Keyboard } from "react-native";
import listInstitutions from "../../api/institutions/listInstitutions";
import signupUser from "../../api/users/signupUser";
import {
  Flex,
  VStack,
  HStack,
  Link,
  Text,
  Heading,
  Divider,
  Select,
  FormControl,
  useToast,
  IconButton,
} from "native-base";
import { useFocusEffect } from "@react-navigation/native";
import {
  FormButton,
  FormNumberInput,
  FormPhoneInput,
  FormSelect,
  FormDatePicker,
} from "../../components/Input/Form/FormComponents";
import { School, CalendarToday, ChevronLeft } from "../../assets/icons/Icons";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Verify({ route, navigation }) {
  const [institutions, setInstitutions] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [validInputs, setValidInputs] = useState({});
  const [formData, setData] = useState({ phoneNumberCode: "+27" });
  const [inputFocused, setInputFocused] = useState(null);
  const [keyboardShowing, setKeyboardShowing] = useState(false);

  const toast = useToast();

  const getInstitutionsList = async () => {
    try {
      setInstitutions(await listInstitutions());
    } catch (error) {
      console.error(error);
    }
  };

  const createAccount = async () => {
    setLoading(true);
    const signUpData = route.params.signUpData;
    const userInfo = {
      name: signUpData.name.trim(),
      surname: signUpData.surname.trim(),
      main_email: signUpData.email.trim(),
      password: signUpData.password.trim(),
      passwordConfirm: signUpData.passwordConfirm.trim(),
      institution: formData.institution.trim(),
      email: formData.studentNumber.trim() + formData.verification.trim(),
      phone_number:
        formData.phoneNumberCode + " " + formData.phoneNumber.trim(),
      date_of_birth: formData.birthDate,
    };
    const result = await signupUser(userInfo);
    if (result === true) {
      setData({ phoneNumberCode: "+27" });
      toast.show({
        description: "Successfully created account",
      });
      navigation.navigate("login");
    } else {
      toast.show({
        description: "Error creating account",
      });
      console.log(result);
    }
    setLoading(false);
  };

  const validateInputs = () => {
    const inputs = ["institution", "studentNumber", "phoneNumber", "birthDate"];
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
        onPress={() => navigation.navigate("signup")}
      />
      <VStack
        space={6}
        width="85%"
        flex={2}
        alignSelf="center"
        justifyContent="center"
      >
        <VStack>
          <Heading size="2xl">One last thing</Heading>
          <Text
            fontSize="md"
            fontWeight="medium"
            lineHeight="xs"
            color="text.400"
          >
            Enter your details to verify your account
          </Text>
        </VStack>
        <VStack alignItems="center" space={10}>
          <VStack space={5} width="100%">
            <FormSelect
              placeholder="Institution"
              selectedValue={formData.institution}
              errorMessage={(validInputs.institution || {}).errorMessage}
              _form={{
                isInvalid: (validInputs.institution || {}).isInvalid,
              }}
              onValueChange={(value) => {
                const verification = institutions.find(
                  (_) => _.name === value
                ).verification;
                setValidInputs({ ...validInputs, institution: {} });
                setData({
                  ...formData,
                  institution: value,
                  verification: verification,
                });
              }}
              onOpen={async () => {
                await getInstitutionsList();
              }}
            >
              {institutions.map((institution) => (
                <Select.Item
                  key={institution.name}
                  label={institution.name}
                  value={institution.name}
                />
              ))}
            </FormSelect>
            <FormControl>
              <FormNumberInput
                placeholder="Student number"
                value={formData.studentNumber}
                InputLeftElement={
                  <School
                    size="md"
                    m={1}
                    color={
                      inputFocused === "studentNumber"
                        ? "primary.200"
                        : "muted.500"
                    }
                  />
                }
                errorMessage={(validInputs.studentNumber || {}).errorMessage}
                _form={{
                  isInvalid: (validInputs.studentNumber || {}).isInvalid,
                }}
                onChangeText={(value) => {
                  setValidInputs({ ...validInputs, studentNumber: {} });
                  setData({ ...formData, studentNumber: value });
                }}
                onFocus={() => setInputFocused("studentNumber")}
                onBlur={() => setInputFocused(null)}
              />
              <FormControl.HelperText>
                {formData.studentNumber && formData.institution && (
                  <Text fontSize="xs" color="text.500">
                    A verification email will be sent to:{" "}
                    <Text fontWeight="bold">
                      {formData.studentNumber}
                      {formData.verification}
                    </Text>
                  </Text>
                )}
              </FormControl.HelperText>
            </FormControl>

            <Divider
              width="50%"
              alignSelf="center"
              bg="primary.100"
              thickness={2}
            />
            <FormPhoneInput
              placeholder="Phone number"
              value={formData.phoneNumber}
              errorMessage={(validInputs.phoneNumber || {}).errorMessage}
              _form={{
                isInvalid: (validInputs.phoneNumber || {}).isInvalid,
              }}
              onChangeText={(value) => {
                setValidInputs({ ...validInputs, phoneNumber: {} });
                setData({ ...formData, phoneNumber: value });
              }}
              _select={{
                selectedValue: formData.phoneNumberCode,
                onValueChange: (value) =>
                  setData({ ...formData, phoneNumberCode: value }),
              }}
            />
            <FormDatePicker
              placeholder="Date of birth"
              value={
                formData.birthDate
                  ? `${formData.birthDate.getDate()} ${
                      monthNames[formData.birthDate.getMonth()]
                    } ${formData.birthDate.getFullYear()}`
                  : ""
              }
              _dtp={{
                value: formData.birthDate,
                onChange: (selectedDate) => {
                  setValidInputs({ ...validInputs, birthDate: {} });
                  setData({ ...formData, birthDate: selectedDate });
                },
              }}
              errorMessage={(validInputs.birthDate || {}).errorMessage}
              _form={{
                isInvalid: (validInputs.birthDate || {}).isInvalid,
              }}
              InputLeftElement={
                <CalendarToday
                  size="md"
                  m={1}
                  color={
                    inputFocused === "birthDate" ? "primary.200" : "muted.500"
                  }
                />
              }
            />
          </VStack>
          <FormButton
            buttonText="Sign up"
            isLoading={isLoading}
            isLoadingText="Signing up"
            onPress={() => {
              if (validateInputs()) {
                createAccount();
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
                setData({ phoneNumberCode: "+27" });
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

export { Verify };
