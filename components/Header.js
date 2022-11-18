import React from "react";
import { Box, HStack } from "native-base";
import { Heading1, Heading2 } from "./Typography/Headings";

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
            <Heading2>{props.text}</Heading2>
          ) : (
            <Heading1>{props.text}</Heading1>
          )}
        </HStack>
      </Box>
    </Box>
  );
}

export { Header };
