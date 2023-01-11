import React from "react";
import { Box, HStack, Icon, IconButton, Heading } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AccountCard(props) {
  return (
    <Box
      width="90%"
      height="115px"
      bg="grayscale.1"
      borderWidth="2px"
      borderColor="app.secondary"
      rounded="10px"
      shadow={2}
      {...props}
    >
      <HStack alignItems="center" justifyContent="center" width="100%">
        <Icon
          mb="1"
          as={<MaterialCommunityIcons name="account-outline" />}
          color="grayscale.4"
          size="64px"
        />
        <Heading size="h5">Daniela Damiani</Heading>
        <IconButton
          icon={
            <Icon
              as={<MaterialCommunityIcons name="chevron-down" />}
              color="grayscale.6"
              size="25px"
            />
          }
          onPress={() => {
            props.navigation.goBack();
          }}
          _pressed={{ bg: "transparent" }}
          rounded="full"
          size="40px"
        />
      </HStack>
    </Box>
  );
}

export { AccountCard };
