import React, { useState, useCallback } from "react";
import createLiftclub from "../../api/liftclubs/createLiftclub";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import {
  Box,
  Flex,
  VStack,
  Pressable,
  Modal,
  Button,
  useToast,
} from "native-base";
import { Header } from "../../components/Header";
import { InputField } from "../../components/Login/InputField";
import { GradientButton } from "../../components/Login/GradientButton";
import { MapSelector } from "../../components/Input/MapSelector";

function CreateClub(props) {
  const [isLoading, setLoading] = useState(false);
  const [formData, setData] = useState({});
  const [location, setLocation] = useState({});
  const [showMap, setShowMap] = useState(false);

  const navigation = useNavigation();
  const toast = useToast();

  useFocusEffect(
    useCallback(() => {
      return () => {
        setData({});
      };
    }, [])
  );

  return (
    <Box height="100%" bg="grayscale.1" safeAreaTop>
      <Flex width="100%" height="100%" direction="column" alignItems="center">
        <Header text="Create lift club" />
        <VStack space={5} alignItems="center" width="90%" pt="20px">
          <InputField
            placeholderText="Liftclub name"
            value={formData.liftclubName}
            iconName="taxi"
            isRequired={true}
            onChangeText={(value) =>
              setData({ ...formData, liftclubName: value })
            }
          />
          <Pressable width="100%" onPress={() => setShowMap(true)}>
            <InputField
              isReadOnly={true}
              placeholderText="Set a primary location"
              value={formData.location}
              iconName="map-marker"
              isRequired={true}
            />
          </Pressable>

          <Modal isOpen={showMap} onClose={() => setShowMap(false)}>
            <Modal.Content width="95%" height="70%">
              <Modal.CloseButton onPress={() => setShowMap(false)} />
              <Modal.Header>Select primary location</Modal.Header>
              <MapSelector
                locationValue={location}
                setLocationValue={setLocation}
              />
              <Button
                position="absolute"
                bottom="15px"
                alignSelf="center"
                width="40%"
                onPress={() => {
                  setData({ ...formData, location: location });
                  setShowMap(false);
                }}
              >
                Select
              </Button>
            </Modal.Content>
          </Modal>
          <GradientButton
            buttonText="Create club"
            isLoading={isLoading}
            isLoadingText="Creating club"
            onPress={async () => {
              setLoading(true);
              const result = await createLiftclub(formData);
              if (result === true) {
                toast.show({
                  description: "Successfully created lift club",
                });
                navigation.goBack();
                console.log("Created liftclub");
              } else {
                toast.show({
                  description: "Error creating lift club",
                });
                console.log(result);
              }
              setLoading(false);
            }}
          />
        </VStack>
      </Flex>
    </Box>
  );
}
export { CreateClub };
