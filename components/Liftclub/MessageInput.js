import React from "react";
import { Input, IconButton, HStack, Icon } from "native-base";
import { Path, G } from "react-native-svg";

function MessageInput(props) {
  return (
    <HStack space={3} {...props}>
      <Input width="80%" height="40px" placeholder="Type your message..." />
      <IconButton
        rounded="full"
        bg="app.primary"
        size="42px"
        icon={
          <Icon size="40px" rounded="full" viewBox="-6 -2 61 28">
            <G fill="none" stroke="grayscale.1" strokeWidth="2px">
              <Path d="M47 1L1 10L15 14M47 1L15 14M47 1L20 15M47 1L34 19L24.5 16.2857M15 14L16.5 22M20 15L16.5 22M20 15L24.5 16.2857M16.5 22L24.5 16.2857" />
            </G>
          </Icon>
        }
        onPress={() => {
          console.log("Press");
        }}
      />
    </HStack>
  );
}

export { MessageInput };
