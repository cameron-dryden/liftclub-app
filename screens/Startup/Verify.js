import React, { useState } from "react";
import PocketBase from "pocketbase";
import listInstitutions from "../../api/institutions/listInstitutions";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Link,
  Radio,
  Text,
  Heading,
  Select,
  Icon,
  FormControl,
  Input,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { InputField } from "../../components/Login/InputField";
import { GradientButton } from "../../components/Login/GradientButton";

const pb = new PocketBase("http://105.184.248.220:8080");

function Verify() {
  const navigation = useNavigation();
  const [institutions, setInstitutions] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [formData, setData] = useState({ phoneNumberCode: "27" });
  const [selectedValue, setValue] = useState();

  const getInstitutionsList = async () => {
    try {
      setInstitutions(await listInstitutions());
    } catch (error) {
      console.error(error);
    }
  };

  // const addUser = async () => {
  //   setLoading(true);
  //   try {
  //     const record = await pb.collection("users").create(formData);
  //     console.log(record);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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
            Verify Account
          </Heading>
          <VStack space={4} alignItems="center">
            <Radio.Group
              name="sex"
              onChange={(value) => {
                setData({ ...formData, sex: value });
              }}
            >
              <Text
                size="b5"
                fontWeight="700"
                textTransform="uppercase"
                color="grayscale.4"
                letterSpacing="0.5px"
              >
                Sex
              </Text>
              <HStack space={5} width="100%">
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </HStack>
            </Radio.Group>
            <InputField
              placeholderText="Phone number"
              value={formData.phoneNumber}
              iconName="account-circle-outline"
              isRequired={true}
              InputLeftElement={
                <Select
                  variant="unstyled"
                  p="0"
                  pb="2px"
                  pl="5px"
                  width="55px"
                  size="m"
                  selectedValue={formData.phoneNumberCode}
                  accessibilityLabel="Choose country"
                  dropdownIcon={
                    <Icon
                      as={<MaterialCommunityIcons name="chevron-down" />}
                      size="24px"
                      p="0"
                      m="0"
                      color="grayscale.4"
                    />
                  }
                  _item={{
                    alignItems: "center",
                    rounded: "full",
                  }}
                  _selectedItem={{
                    bg: "app.primary",
                  }}
                  mt={1}
                  onValueChange={(value) =>
                    setData({ ...formData, phoneNumberCode: value })
                  }
                >
                  <Select.Item label="+27" value="27" />
                  <Select.Item label="+35" value="35" />
                  <Select.Item label="+45" value="45" />
                </Select>
              }
              onChange={(value) => setData({ ...formData, phoneNumber: value })}
            />
            <Select
              variant="outline"
              selectedValue={formData.institution}
              width="100%"
              accessibilityLabel="Select your institution"
              placeholder="Select your institution"
              onOpen={async () => {
                await getInstitutionsList();
              }}
              onValueChange={(value) => {
                setData({ ...formData, institution: value });
              }}
              _actionSheetBody={{
                ListHeaderComponent: (
                  <FormControl px={3} mb={3}>
                    <Input
                      px={15}
                      py={2}
                      fontSize={16}
                      value={selectedValue}
                      placeholder="Search"
                      _focus={{
                        bg: "grayscale.1",
                        borderColor: "darkBlue.600",
                      }}
                      type="text"
                      onChangeText={(value) => {
                        setValue(value);
                      }}
                    />
                  </FormControl>
                ),
              }}
            >
              {institutions.map((institution) => {
                return (
                  <Select.Item
                    key={institution.id}
                    label={institution.name}
                    value={institution.name}
                  />
                );
              })}
            </Select>
            <InputField
              placeholderText="Student number"
              value={formData.studentNumber}
              iconName="school-outline"
              isRequired={true}
              onChange={(value) =>
                setData({ ...formData, studentNumber: value })
              }
            />
            <GradientButton
              buttonText="Verify"
              isLoading={isLoading}
              isLoadingText="Verifying"
              onPress={() => {
                console.log(formData);
              }}
            />
          </VStack>
          <HStack space={1} width="100%" justifyContent="center">
            <Link
              onPress={() => {
                navigation.navigate("home");
              }}
            >
              Skip for now
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}

export { Verify };
