import React from "react";
import { Box, Circle, HStack, VStack, Text } from "native-base";

function MessageBox(props) {
  return (
    <HStack {...props}>
      <Box
        height="15px"
        width="15px"
        overflow="hidden"
        bg={props.senderName ? "app.tertiary" : "grayscale.1"}
      >
        <Circle
          left="-15px"
          size="30px"
          bg="grayscale.1"
          position="absolute"
        ></Circle>
      </Box>
      <Box
        bg={props.senderName ? "app.tertiary" : "grayscale.2"}
        width="75%"
        roundedRight="15px"
        roundedBottomLeft="15px"
      >
        <VStack px="10px" pt="2px" pb="6px">
          {props.senderName ? (
            <Text size="b5" fontWeight="700" textTransform="uppercase" py="1px">
              {props.senderName}
            </Text>
          ) : (
            ""
          )}
          <Text size="b4">{props.messageText}</Text>
        </VStack>
      </Box>
    </HStack>
  );
}

export { MessageBox };
