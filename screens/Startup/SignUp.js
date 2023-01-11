import React from "react";
import signupUser from "../../api/users/signupUser";
import { Box, Flex, VStack, HStack, Link, Text, Heading } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { InputField } from "../../components/Login/InputField";
import { GradientButton } from "../../components/Login/GradientButton";

function SignUp() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = React.useState(false);
  const [formData, setData] = React.useState({});

  return (
    <Box height="100%" bg="grayscale.1" safeAreaTop>
      <Flex
        width="100%"
        height="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <VStack width="80%" space={7}>
          <Heading size="h1" fontWeight="900">
            Create Account
          </Heading>
          <VStack space={4} alignItems="center">
            <InputField
              placeholderText="First name"
              value={formData.name}
              iconName="account-circle-outline"
              isRequired={true}
              onChangeText={(value) => setData({ ...formData, name: value })}
            />
            <InputField
              placeholderText="Surname"
              value={formData.surname}
              iconName="account-circle-outline"
              isRequired={true}
              onChangeText={(value) => setData({ ...formData, surname: value })}
            />
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
              isRequired={true}
              type="password"
              onChangeText={(value) =>
                setData({ ...formData, password: value })
              }
            />
            <InputField
              placeholderText="Confirm password"
              value={formData.passwordConfirm}
              iconName="lock-outline"
              type="password"
              errorMessage="Passwords do not match."
              isRequired={true}
              onChangeText={(value) => {
                setData({ ...formData, passwordConfirm: value });
              }}
            />
            <GradientButton
              buttonText="Sign Up"
              isLoading={isLoading}
              isLoadingText="Signing up"
              onPress={async () => {
                setLoading(true);
                const result = await signupUser(formData);
                if (result === true) {
                  console.log("Created user");
                } else console.log(result);
                setLoading(false);
              }}
            />
            {/* <InputButton
              buttonText="Sign Up"
              isLoading={isLoading}
              isLoadingText="Signing up"
              onPress={() => {
                addUser();
              }}
            /> */}
          </VStack>
          <HStack space={1} width="100%" justifyContent="center">
            <Text size="b4" color="grayscale.4">
              Already have an account?
            </Text>
            <Link
              onPress={() => {
                navigation.navigate("login");
              }}
            >
              Sign in
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}

export { SignUp };
