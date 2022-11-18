import React from "react";
import {
  Box,
  VStack,
  HStack,
  Icon,
  ScrollView,
  Flex,
  IconButton,
} from "native-base";
import { ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Header } from "../../components/Header";
import { MessageInput } from "../../components/Liftclub/MessageInput";
import { MessageBox } from "../../components/Liftclub/MessageBox";
import { Chip } from "../../components/Chip";

function ClubChat(props) {
  const chips = [
    "Runing late!",
    "Leaving now",
    "Stuck in traffic",
    "I'm around the corner",
  ];
  const messages = require("../../testing/messages.json");

  return (
    <Box height="100%" bg="grayscale.1" safeAreaTop>
      <ImageBackground
        source={require("../../assets/chat_background.png")}
        resizeMode="cover"
      >
        <Flex width="100%" height="100%" direction="column">
          <Header
            mini
            text={props.route.params.clubName}
            leftIcon={
              <IconButton
                icon={
                  <Icon
                    as={<MaterialCommunityIcons name="chevron-left" />}
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
            }
          />
          <ScrollView flex={1} width="100%">
            <VStack space={2} py="10px" px="5px">
              {messages.map((message) => (
                <MessageBox
                  key={message.id}
                  senderName={message.first_name + " " + message.last_name}
                  messageText={message.message_text}
                ></MessageBox>
              ))}
            </VStack>
          </ScrollView>
          <VStack space={2} pb="8px" pt="3px" alignItems="center">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <HStack space={1} px="6px">
                {chips.map((text) => (
                  <Chip key={text}>{text}</Chip>
                ))}
              </HStack>
            </ScrollView>
            <MessageInput></MessageInput>
          </VStack>
        </Flex>
      </ImageBackground>
    </Box>
  );
}

export { ClubChat };
