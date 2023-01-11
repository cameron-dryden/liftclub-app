import React, { useState } from "react";
import createLiftclub from "../../api/liftclubs/createLiftclub";
import { Box, Flex, VStack } from "native-base";
import { Header } from "../../components/Header";
import { InputField } from "../../components/Login/InputField";
import { GradientButton } from "../../components/Login/GradientButton";
import { MapSelector } from "../../components/Input/MapSelector";

function CreateClub(props) {
  const [isLoading, setLoading] = useState(false);
  const [formData, setData] = useState({});

  return (
    <Box height="100%" bg="grayscale.1" safeAreaTop>
      <Flex width="100%" height="100%" direction="column" alignItems="center">
        <Header text="Create lift club" />
        <VStack space={5} alignItems="center" width="100%" pt="20px">
          <InputField
            placeholderText="Liftclub name"
            value={formData.liftclubName}
            iconName="taxi"
            isRequired={true}
            onChangeText={(value) =>
              setData({ ...formData, liftclubName: value })
            }
          />
          <MapSelector />
          <InputField
            placeholderText="Set a primary location"
            value={formData.location}
            iconName="map-marker"
            isRequired={true}
            onChangeText={(value) => setData({ ...formData, location: value })}
          />
          <GradientButton
            buttonText="Create club"
            isLoading={isLoading}
            isLoadingText="Creating club"
            onPress={async () => {
              setLoading(true);
              const result = await createLiftclub(formData);
              if (result === true) {
                console.log("Created liftclub");
              } else console.log(result);
              setLoading(false);
            }}
          />
        </VStack>
      </Flex>
    </Box>
  );
}
export { CreateClub };
