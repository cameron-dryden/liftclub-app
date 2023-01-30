import React, { useCallback } from "react";
import pb from "../../api/base";
import verifyUser from "../../api/users/verifyUser";
import { Flex, VStack, Box, Link, Text, Heading } from "native-base";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { FormButton } from "../../components/Input/Form/FormComponents";
import AnimatedLoading from "../../assets/AnimatedLoading";

function EmailVerification({ navigation }) {
  const mainnavigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      return () => {};
    }, [])
  );

  return (
    <Flex bg="white" width="100%" height="100%" safeAreaTop>
      <VStack
        space={16}
        width="85%"
        flex={1}
        alignSelf="center"
        justifyContent="center"
      >
        <VStack>
          <Heading size="2xl">Email verification</Heading>
          <Text
            fontSize="md"
            fontWeight="medium"
            lineHeight="xs"
            color="text.400"
          >
            Check your student email for the verification link
          </Text>
        </VStack>
        <Box height="20%">
          <AnimatedLoading />
        </Box>
      </VStack>
      <VStack alignItems="center" space={5} safeAreaBottom bottom={10}>
        <FormButton
          buttonText="Continue"
          onPress={() => {
            if (pb.authStore.model.verified) {
              mainnavigation.navigate("home");
            } else {
              console.log("Verified?");
              mainnavigation.navigate("home");
            }
          }}
        />
        <Link
          _text={{ fontSize: "md" }}
          onPress={async () => {
            const result = await verifyUser(pb.authStore.model.email);
            if (result === true) {
              console.log("Email sent");
            } else {
              console.log(result);
            }
          }}
        >
          Resend email
        </Link>
      </VStack>
    </Flex>
  );
}

export { EmailVerification };
