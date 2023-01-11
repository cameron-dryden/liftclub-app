import React from "react";
import { Box, HStack, Heading } from "native-base";

function Header(props) {
  return (
    <Box
      width="100%"
      height="90px"
      bg="app.secondary"
      roundedBottom="25px"
      {...props}
    >
      <Box
        width="100%"
        height="86px"
        bg="grayscale.1"
        roundedBottom="25px"
        alignItems="center"
        justifyContent="center"
      >
        <HStack width="100%" justifyContent="center" alignItems="center">
          {props.leftIcon ? (
            <Box position="absolute" left="5px">
              {props.leftIcon}
            </Box>
          ) : (
            ""
          )}
          {props.mini ? (
            <Heading size="h2">{props.text}</Heading>
          ) : (
            <Heading size="h1">{props.text}</Heading>
          )}
        </HStack>
      </Box>
    </Box>
  );
}

export { Header };
